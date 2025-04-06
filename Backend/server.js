const app = require('./app');
const sequelize = require('./models/db.js');
const PORT = process.env.PORT || 3101;

const startServer = async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Connected to database...');

      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });      
  } catch (error) {
      console.error('Отсутствует подключение к БД', error);
  }
};

startServer();


