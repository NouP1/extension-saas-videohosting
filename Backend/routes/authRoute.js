const express = require('express');
const router = express.Router();
const { authGoogleUser} = require('../controllers/authControllers/authGoogleController.js');
const { authEmailUser} = require('../controllers/authControllers/authEmailController.js');
const { verifyCode } = require('../controllers/authControllers/authCodeVerifyController.js');
const {refreshAccessToken} = require('../middlewares/authMiddleware.js');
const {validateRefreshToken} = require('../middlewares/authMiddleware.js')
const {checkAuth} =require('../controllers/authControllers/checkAuth.js')
const { logoutUser } = require('../controllers/authControllers/logoutUserController.js');


router.post('/auth/google', authGoogleUser);
router.post('/auth/email',authEmailUser );
router.post('/auth/verify',verifyCode );
router.post('/auth/refresh',validateRefreshToken, refreshAccessToken);
router.post('/auth/logout',logoutUser);
router.post('/auth/check',checkAuth);

module.exports = router;