
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '113245820443-1emlhacj7r2tspvuscbnep86srh5n2rb.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);


const authGoogleUser =  async (req, res) => {
  const { token } = req.body;
  

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { name, email, picture, } = payload;
    
    // Здесь можно сохранить данные в базу данных или создать сессию для пользователя

    res.status(200).json({ name, email, picture, payload });
  } catch (error) {
    console.error('Ошибка при проверке токена Google:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
 
}
module.exports = {authGoogleUser};
