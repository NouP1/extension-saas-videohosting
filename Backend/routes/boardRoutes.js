const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middlewares/authMiddleware.js')
const { getBoards} = require('../controllers/boardControllers/getBoardController.js');
const { addBoard} = require('../controllers/boardControllers/addBoardController.js');
const { renameBoard} = require('../controllers/boardControllers/renameBoardController.js');
const { deleteBoard} = require('../controllers/boardControllers/deleteBoardController.js');
const { getVideosBoard } = require('../controllers/videoControllers/videoBoardController.js');

router.get('/boards/all/',authenticateToken,getBoards);
router.post('/boards/addBoard',authenticateToken,addBoard);
router.put('/boards/renameBoard',authenticateToken,renameBoard);
router.post('/boards/deleteBoard',authenticateToken,deleteBoard);
router.get('/boards/:boardid/:userid',authenticateToken,getVideosBoard);

module.exports = router;