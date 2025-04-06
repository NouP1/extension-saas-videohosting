const sequelize  = require ('./db.js')
const {DataTypes}  = require('sequelize');

const VideoModel = sequelize.define(
  'videos',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      poster_url: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      uploaded_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }, 
  },
    {
      timestamps: false  // Отключаем временные метки
    });
    



module.exports = VideoModel;