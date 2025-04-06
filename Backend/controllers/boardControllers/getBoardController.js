const CatalogModel = require('../../models/catalogsModel');
const { Op } = require('sequelize'); 

async function getBoards(req, res) {
  const userId  = req.user.userId;

  try {
    const catalogs = await CatalogModel.findAll({ where: { user_id: userId }, raw: true, });

    function buildTree(data, parentId = null) {
      return data
          .filter(item => item.parent_id === parentId)
          .map(item => ({
              ...item,
              children: buildTree(data, item.id),
          }));
  }
  const treeCatalogs = buildTree(catalogs)
    res.status(200).json(treeCatalogs);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении каталогов', error });
  }
}
module.exports = {getBoards}