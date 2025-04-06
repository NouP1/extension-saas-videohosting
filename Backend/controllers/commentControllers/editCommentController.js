const TagsModel = require('../../models/commentsModel');
const UserModel = require('../../models/userModel');
const VideoModel = require('../../models/videosModel');

const editComment = async (req, res) => {
  const { commentId, comment } = req.body;
  const email = req.user.email;

  if (!commentId || !comment || !email) {
    return res.status(400).json({
      success: false,
      message: 'Пожалуйста, укажите ID комментария, текст комментария и email пользователя.',
    });
  }

  try {
    // Проверяем, существует ли пользователь
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Пользователь не найден.',
      });
    }

    // Проверяем, существует ли комментарий
    const existingComment = await TagsModel.findOne({ where: { id: commentId, user_id: user.id } });
    if (!existingComment) {
      return res.status(404).json({
        success: false,
        message: 'Комментарий не найден или вы не являетесь его автором.',
      });
    }

    // Обновляем комментарий
    await existingComment.update({ content: comment });

    return res.status(200).json({
      success: true,
      message: 'Комментарий успешно обновлен.',
      comment: {
        id: existingComment.id,
        comment: existingComment.content,
        updatedAt: existingComment.updated_at,
      },
    });
  } catch (error) {
    console.error('Ошибка при редактировании комментария:', error);
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при редактировании комментария.',
    });
  }
};

module.exports = { editComment };