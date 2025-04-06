const sequelize  = require ('./db.js')
const {DataTypes}  = require('sequelize');
const VideoModel = require('./videosModel.js');
const UserModel = require('./userModel.js');
const CatalogModel = require('./catalogsModel.js');

const VideosUserModel = sequelize.define(
  'Videos_users',
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
      
    },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: UserModel,
          key: 'id',
        },
      },
      video_id: {
        type: DataTypes.INTEGER,
        references: {
          model: VideoModel,
          key: 'id',
        },
      },
      catalog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: CatalogModel,
          key: 'id',
        },
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
  },
    {
      timestamps: false  // Отключаем временные метки
    });
    
    UserModel.belongsToMany(VideoModel, {
      through: VideosUserModel,
      foreignKey: 'user_id',
      as: 'userVideos', // Уникальный алиас
    });
    
    VideoModel.belongsToMany(UserModel, {
      through: VideosUserModel,
      foreignKey: 'video_id',
      as: 'videoUsers', // Уникальный алиас
    });
    
    // Связь видео и каталогов через Videos_users
    CatalogModel.hasMany(VideosUserModel, { foreignKey: 'catalog_id', as: 'catalogVideos' });
    VideosUserModel.belongsTo(CatalogModel, { foreignKey: 'catalog_id', as: 'catalog' });
    
    // Связь пользователей и Videos_users
    UserModel.hasMany(VideosUserModel, { foreignKey: 'user_id', as: 'userVideoLinks' });
    VideosUserModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });
    
    // Связь видео и Videos_users
    VideoModel.hasMany(VideosUserModel, { foreignKey: 'video_id', as: 'videoLinks' });
    VideosUserModel.belongsTo(VideoModel, { foreignKey: 'video_id', as: 'video' });


module.exports = VideosUserModel;