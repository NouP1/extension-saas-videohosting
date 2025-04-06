const jwt = require('jsonwebtoken');
require('dotenv').config()

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN;


const checkAuth = (req, res, next) => {

    const accessToken = req.cookies.accessToken;

    if (!accessToken) {

        return res.sendStatus(401);
    }

    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        } 
            res.status(200).json({ message: 'Authorized' });
        
    });
    

}
module.exports = {checkAuth};
