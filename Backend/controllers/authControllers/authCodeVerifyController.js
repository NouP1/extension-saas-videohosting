const redisClient = require('../../services/redisClient.js');
const {createTokens} = require('../../middlewares/authMiddleware.js')
const UserModel = require('../../models/userModel.js');
require('dotenv').config()

const verifyCode = async (req, res) => {
  const { email, code } = req.body; 
  console.log(`Отправленный пользователем код: ${code}`)
  try {
      const savedCode = await redisClient.get(`verify_code:${email}`);
      console.log(`savedCode: ${savedCode}`);
      
      if (savedCode === code) {
          await redisClient.del(`verify_code:${email}`);

          let user = await UserModel.findOne({ where: { email } });
      
          if (!user) {

            user = await UserModel.create({email});
            console.log(`Создан новый пользователь: ${user.id}`);
          } else {
            console.log(`Пользователь уже существует: ${user.id}`);
          }

          const { accessToken, refreshToken } = createTokens(email, user.id);

          await redisClient.set(`refresh_token:${email}`, refreshToken, { EX: 60 * 60 * 1000 }); // 7 дней

          res.cookie('accessToken', accessToken, {
              httpOnly: true,
              secure: false, 
              sameSite: 'Strict',
              maxAge: 30 * 1000 
          });
          res.cookie('refreshToken', refreshToken, {
              httpOnly: true,
              secure: false,
              sameSite: 'Strict',
              maxAge: 60 * 60 * 1000
          });

          // Отправляем успешный ответ клиенту
          res.status(200).json({ message: 'Verification successful' });
          console.log("Отправленные с сервера куки: " + accessToken, refreshToken)
      } else {
          res.status(400).json({ message: 'Invalid code or expired' });
      }
  } catch (error) {
      console.error('Ошибка при проверке кода:', error);
      res.status(500).json({ message: 'Failed to verify code' });
  }
};

module.exports = { verifyCode };