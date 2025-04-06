const videos = require('../../models/apifb');
const UserModel = require('../../models/userModel')

const regUserForm = async (req, res) => {
    try {
      const { firstName, lastName, workEmail, companyName, role } = req.body; 
      const userId = req.user.userId
  console.log(firstName,lastName,workEmail,companyName,role, userId)
  
      if (!firstName || !lastName || !workEmail || !companyName || !role || !userId) {
        return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
      }

      const [user, created] = await UserModel.findOrCreate({
        where: { id: userId }, 
        defaults:{entered_first_time: true}});
  
      if (!created) {
        await user.update({ workEmail: workEmail, full_name:firstName, company_name:companyName, phone_number:'12345', role:role, entered_first_time:false });
      }

      res.status(200).json( 'Пользователь успешно зараегистрирован');
    } catch (error) {
      console.error('Ошибка при регистрации пользователя:', error);
      res.status(500).json({ error: 'Не удалось зарегистрировать пользователя' });
    }
  };
  
  module.exports = { regUserForm }; 