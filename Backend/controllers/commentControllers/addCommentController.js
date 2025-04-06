const TagsModel = require('../../models/commentsModel');
const UserModel = require('../../models/userModel');
const VideoModel = require('../../models/videosModel');

const addComment = async (req, res) => {
    const { comment,videoId} = req.body;
    const email = req.user.email
  console.log(comment,videoId,email)
    if (!comment || !videoId || !email) {
      return res.status(400).json({
        success: false,
        message: 'Пожалуйста, укажите видео, пользователя и текст комментария.',
      });
    }
  
    try {
      // Проверка наличия видео
      const videoExists = await VideoModel.findByPk(videoId);
      if (!videoExists) {
        return res.status(404).json({
          success: false,
          message: 'Видео не найдено.',
        });
      }
  
      const user = await UserModel.findOne({where:{email}})
      if (!user) return res.status(400)
      // Добавление комментария
      const newComment = await TagsModel.create({
        video_id: videoId,
        user_id: user.id,
        content: comment,
      });
  
      return res.status(201).json({
        success: true,
        comment: {
          id: newComment.id,
          comment: newComment.content,
          createdAt: newComment.created_at,
          username: user.full_name
        },
      });
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
      return res.status(500).json({
        success: false,
        message: 'Ошибка сервера при добавлении комментария',
      });
    }
  };
  







module.exports = {addComment }