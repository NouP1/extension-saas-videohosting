const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middlewares/authMiddleware.js')
const { getVideos } = require('../controllers/videoControllers/videoController.js');
const {savedVideo} = require('../controllers/videoControllers/savedVideoController.js')

router.get('/getVideo/:sub',authenticateToken,getVideos);
router.get('/savedVideo/:sub',authenticateToken,savedVideo);
module.exports = router;