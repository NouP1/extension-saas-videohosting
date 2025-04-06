const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middlewares/authMiddleware.js')
const { getComment} = require('../controllers/commentControllers/getCommentController.js');
const { addComment} = require('../controllers/commentControllers/addCommentController.js');
const { editComment} = require('../controllers/commentControllers/editCommentController.js');
const { deleteComment} = require('../controllers/commentControllers/deleteCommentController.js');

router.get('/comments/:videoId',authenticateToken,getComment);
router.post('/comments/addComment',authenticateToken,addComment);
router.put('/comments/updateComment',authenticateToken,editComment);
router.post('/comments/deleteComment',authenticateToken,deleteComment);
module.exports = router;