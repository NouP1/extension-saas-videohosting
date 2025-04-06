const redisClient = require('../../services/redisClient')

const logoutUser = async (req, res) => {
const { email } = req.user || {};
  
try {
  if (email) {
 
    await redisClient.del(`refresh_token:${email}`);
  }

  // Удаляем куки, делая их просроченными
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  
  res.status(200).json({ message: 'Logout successful' });
} catch (error) {
  console.error("Ошибка при выходе:", error);
  res.status(500).json({ message: 'Logout failed' });
}

}
module.exports = {logoutUser}
