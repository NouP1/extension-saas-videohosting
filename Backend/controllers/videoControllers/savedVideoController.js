
const savedVideo = async (req, res) => {
  try {
    
    const idVideo = req.params.idVideo
    const email = req.user.email
    const sub = req.params.idVideo

    const savedVideoById = (idVideo, email) => {
       
  };

  const videoList = getVideosBySub(sub,email);
  console.log(videoList)
    res.status(200).json(videoList);
  } catch (error) {
    console.error('Ошибка при получении видео:', error);
    res.status(500).json({ error: 'Не удалось получить видео' });
  }
};

module.exports = { savedVideo };