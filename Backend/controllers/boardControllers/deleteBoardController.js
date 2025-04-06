const CatalogModel = require('../../models/catalogsModel');
const { Op } = require('sequelize');

async function deleteBoard(req, res) {
  const { catalogId } = req.body;

  if (!catalogId) {
    return res.status(400).json({ message: 'Необходимо указать catalogId каталога' });
  }

  try {

    const catalog = await CatalogModel.findByPk(catalogId);

    if (!catalog) {
      return res.status(404).json({ message: 'Каталог не найден' });
    }

    async function deleteSubCatalogs(parentId) {
      const subCatalogs = await CatalogModel.findAll({ where: { parent_id: parentId } });
      for (const subCatalog of subCatalogs) {
        await deleteSubCatalogs(subCatalog.id);
        await subCatalog.destroy();
      }
    }

    await deleteSubCatalogs(catalogId)
    await catalog.destroy();

    res.status(200).json({ message: 'Каталог успешно удалён' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении каталога', error });
  }
}
module.exports = { deleteBoard }