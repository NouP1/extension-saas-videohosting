const videos = require('../../models/apifb');
const UserModel = require('../../models/userModel')

const getVideos = async (req, res) => {
  try {
    
    const sub = req.params.sub
    const email = req.user.email
    
    const [user, created] = await UserModel.findOrCreate({
      where: { email },
      defaults: { entered_first_time: true }, 
    });

    let isFirstVisit = user.entered_first_time;

    const getVideosBySub = (sub, email) => {

      // const resultForSub = sub ? videos.find(video => (sub && video.sub) === sub): [];
      const resultForEmail = email ? videos.find(video => (email && video.email) === email): [];
      return resultForEmail ? resultForEmail.videos : 
             [];
              // resultForSub ? resultForSub.videos : 
  };

  const videoList = getVideosBySub(sub,email);
  console.log(videoList)
   res.status(200).json({
      isFirstVisit,
      videos: videoList, 
    });
  } catch (error) {
    console.error('Ошибка при получении видео:', error);
    res.status(500).json({ error: 'Не удалось получить видео' });
  }
};

module.exports = { getVideos };