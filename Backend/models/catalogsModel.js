const sequelize  = require ('./db.js')
const {DataTypes}  = require('sequelize');
const UserModel = require('./userModel.js');

const CatalogModel = sequelize.define(
  'Catalogs',
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
      
    },
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull:false,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.UUIDV4, // Ссылка на другой каталог
      allowNull: true,
      references: {
        model: 'Catalogs',
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
    {
      timestamps: false  // Отключаем временные метки
    });
    
    UserModel.hasMany(CatalogModel, { foreignKey: 'user_id' });
    CatalogModel.belongsTo(UserModel, { foreignKey: 'user_id' });


module.exports = CatalogModel;