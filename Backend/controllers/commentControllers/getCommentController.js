const TagsModel = require('../../models/commentsModel');
const UserModel = require('../../models/userModel');

// Получение комментариев к конкретному видео
const getComment = async (req, res) => {
  const videoId  = req.params.videoId;
  console.log(videoId)

  try {
    const comments = await TagsModel.findAll({
      where: { video_id: videoId },
      include: [
        { model: UserModel, attributes: ['full_name'], as:'user' }, 
      ],
      order: [['created_at', 'DESC']], // Комментарии в порядке создания
    });

    return res.status(200).json({
      success: true,
      comments: comments.map((comment) => ({
        id: comment.id,
        comment: comment.content,
        createdAt: comment.created_at,
        username: comment.user ? comment.user.full_name : 'Аноним',
      })),
    });
  } catch (error) {
    console.error('Ошибка при получении комментариев:', error);
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при получении комментариев',
    });
  }
};


module.exports = {getComment}