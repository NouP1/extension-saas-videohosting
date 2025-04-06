const sequelize  = require ('./db.js')
const {DataTypes}  = require('sequelize');

const UserModel = sequelize.define(
  'users',
  { 
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      workEmail: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      company_name: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      role : {
        type: DataTypes.STRING,
      },
      registration_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      entered_first_time: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      ip: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      region: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      timezone: {
        type: DataTypes.STRING,
      },
      deviceType: {
        type: DataTypes.STRING,
      },
      os: {
        type: DataTypes.STRING,
      },
      browser: {
        type: DataTypes.STRING,
      },
      screenResolution: {
        type: DataTypes.STRING,
      },
      vpn: {
        type: DataTypes.BOOLEAN,
      },
      referrer: {
        type: DataTypes.STRING,
      },
      userAgent: {
        type: DataTypes.STRING,
      },
      failedLogins: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
     
  },
    {
      timestamps: false  // Отключаем временные метки
    });
    



module.exports = UserModel;