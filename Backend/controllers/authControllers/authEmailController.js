const nodemailer = require('nodemailer');
const redisClient = require('../../services/redisClient.js')


const authEmailUser = async (req, res) => {
  const { email } = req.body;

  try {
    
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465, // защищенное соединение на порту 465
      secure: true, // true для 465, false для других портов
      auth: {
        user: 'avteam.olmp@mail.ru', // ваш email на Mail.ru
        pass: 'r7gJqMNHpVCwxZf89Mwe'   // пароль приложения
      }
    });
     

    await transporter.sendMail({
      from: '"AVteam Support" <avteam.olmp@mail.ru>', 
      to: email,
      subject: 'Your AVteam Verification Code',
      text: `Your verification code is: ${code}`
    });

    await redisClient.setEx(`verify_code:${email}`, 600, code);
    console.log(`Отправленное письмо пользователю: ${email,code}`)
    res.status(200).json({ message: 'Verification code sent' });
  } catch (error) {
    console.error('Ошибка при отправке кода:', error);
    res.status(500).json({ message: 'Failed to send verification code' });
  }
};

module.exports = { authEmailUser };