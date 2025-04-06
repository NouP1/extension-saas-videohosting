const jwt = require('jsonwebtoken');
const redisClient = require('../services/redisClient.js');
require('dotenv').config()

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN;

const ACCESS_TOKEN_LIFETIME = 30;
const REFRESH_TOKEN_LIFETIME = 60;


const createTokens = (email, userId) => {
    const accessToken = jwt.sign({ email, userId }, ACCESS_TOKEN_SECRET, { expiresIn: `${ACCESS_TOKEN_LIFETIME}s` });
    const refreshToken = jwt.sign({ email, userId }, REFRESH_TOKEN_SECRET, { expiresIn: `${REFRESH_TOKEN_LIFETIME}m` });
    return { accessToken, refreshToken };
};


const authenticateToken = (req, res, next) => {

        const accessToken = req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;

        console.log("access token в MB: "+accessToken)
        console.log("refresh token в MB: "+refreshToken)

        if (!accessToken) {

            return res.sendStatus(401);
        }

        jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);

            req.user = user;  
            console.log(user) 
            next();
        });
   
}


const validateRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.sendStatus(401); // Токен отсутствует
    }

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); 
        }
        req.user = user; 
        next();
    });
};


const refreshAccessToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken; 
    console.log("user: "+req.user)
    console.log("Обновление refreshToken: "+refreshToken)// Извлекаем refreshToken из куки

    if (!refreshToken) return res.sendStatus(401);

    try {
        // Проверяем refresh токен в Redis
        const savedToken = await redisClient.get(`refresh_token:${req.user.email}`);
        console.log("Обновление "+savedToken, req.user.email)
        if (!savedToken || savedToken !== refreshToken) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }

        // Проверяем refresh токен
        jwt.verify(savedToken, REFRESH_TOKEN_SECRET, async (err, user) => {
            if (err) return res.sendStatus(403); // Недействительный токен

            // Создаем новые токены
            const { accessToken, refreshToken: newRefreshToken } = createTokens(user.email,user.userId);
            console.log("Новые токены"+accessToken, newRefreshToken)

            // Обновляем refresh токен в Redis
            await redisClient.set(`refresh_token:${user.email}`, newRefreshToken, { EX: 60 * 60 * 1000 });

            // Обновляем куки с новыми токенами
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'Strict',
                maxAge: 30 * 1000 // 15 минут
            });

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'Strict',
                maxAge: 60 * 60 * 1000 // 7 дней
            });

            res.status(200).json({ message: 'Tokens refreshed successfully' });
        });
    } catch (error) {
        console.error('Ошибка при обновлении токена:', error);
        res.status(500).json({ message: 'Failed to refresh token' });
    }
};

module.exports = { createTokens, authenticateToken, refreshAccessToken, validateRefreshToken }