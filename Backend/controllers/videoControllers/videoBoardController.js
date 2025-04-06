const CatalogModel = require('../../models/catalogsModel');
const { Op } = require('sequelize');

async function getVideosBoard(req, res) {
    const { boardid, userid } = req.params;
  
    try {
      const catalog = await CatalogModel.findOne({ where: { id: boardid, user_id: userid } });
  
      if (!catalog) {
        return res.status(404).json({ message: 'Каталог не найден' });
      }
  
      // Здесь предполагается, что у вас есть связь между видео и каталогами
      const videos = await catalog.getVideos(); // Настройте связь в модели, если её нет
  
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при получении видео из каталога', error });
    }
  }
  module.exports ={getVideosBoard}