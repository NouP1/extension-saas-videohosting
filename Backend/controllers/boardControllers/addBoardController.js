const CatalogModel = require('../../models/catalogsModel');
const { Op } = require('sequelize');

// Добавление нового каталога
async function addBoard(req, res) {
  const { name_board, catalogParentId } = req.body;
  const userId = req.user.userId
console.log(req.body)
  if (!userId || !name_board) {
    return res.status(400).json({ message: 'Необходимо указать user_id и имя каталога' });
  }

  try {
    const newCatalog = await CatalogModel.create({
       user_id:userId, 
       name:name_board,
       parent_id:catalogParentId});

       
    
    res.status(201).json(newCatalog);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при добавлении каталога', error });
  }
}



module.exports = {addBoard};
