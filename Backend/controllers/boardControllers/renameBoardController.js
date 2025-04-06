const CatalogModel = require('../../models/catalogsModel');
const { Op } = require('sequelize');

async function renameBoard(req, res) {
    const { catalogId, name } = req.body;
  
    if (!catalogId || !name || name.length > 50) {
      return res.status(400).json({ message: 'Ошибка при переименовании каталога' });
    }
  
    try {
      const catalog = await CatalogModel.findByPk(catalogId);
  
      if (!catalog) {
        return res.status(404).json({ message: 'Каталог не найден'});
      }
  
      await catalog.update({name:name});
  
      res.status(200).json({catalog});
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при переименовании каталога', error });
    }
  }
  module.exports = {renameBoard}