const sequelize  = require ('./db.js')
const {DataTypes}  = require('sequelize');
const UserModel = require('./userModel.js');
const VideoModel = require('./videosModel.js')

const TagsModel = sequelize.define(
  'Tags',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
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
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
  },
    {
      timestamps: false  // Отключаем временные метки
    });

UserModel.hasMany(TagsModel, { foreignKey: 'user_id' });
TagsModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

VideoModel.hasMany(TagsModel, { foreignKey: 'video_id' });
TagsModel.belongsTo(VideoModel, { foreignKey: 'video_id' });



module.exports = TagsModel;