const TagsModel = require('../../models/commentsModel');
const UserModel = require('../../models/userModel');

const deleteComment = async (req, res) => {
  const { commentId} = req.body;
  const email = req.user.email;
    console.log(req.body, email)
    
  if (!commentId || !email) {
    return res.status(400).json({
      success: false,
      message: 'Пожалуйста, укажите ID комментария и email пользователя.',
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
    const comment = await TagsModel.findOne({ where: { id: commentId, user_id: user.id } });
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Комментарий не найден или вы не являетесь его автором.',
      });
    }

    // Удаляем комментарий
    await comment.destroy();

    return res.status(200).json({
      success: true,
      message: 'Комментарий успешно удален.',
    });
  } catch (error) {
    console.error('Ошибка при удалении комментария:', error);
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при удалении комментария.',
    });
  }
};

module.exports = { deleteComment };