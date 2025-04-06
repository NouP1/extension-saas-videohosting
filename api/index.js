require('dotenv').config();
const axios = require('axios');

// Переменные окружения
const access_token ="EAAQVjuBUnLYBO7DZBmZBIwdWliL3xDZC8QQ88p6iGPLXkWxWPIE98z9757AuydZCjqgdfqeW4yMkUdtBAvittVNiW4ZAnj0JyB QXVMg0ZAxeJgdvCy8CeKiGwJBV8VJrrbN1IjthZA7i06Hj9O20szFhpUAFsWb7iMYZBWE6N7sQcF1yU0jcvnWFdnNKadp8SjsZD";
const AD_LIBRARY_URL = 'https://graph.facebook.com/v22.0/ads_archive';

// Функция для получения рекламных данных
async function getAdVideos(searchTerm) {
  try {
    const response = await axios.get(AD_LIBRARY_URL, {
      params: {
        access_token: access_token,
        ad_reached_countries: 'US', // Страны, где показывается реклама
        ad_type: 'POLITICAL_AND_ISSUE_ADS', // Тип рекламы
        search_terms: 'california', // Ключевое слово для поиска
        // limit: 10, // Лимит записей
      },
    });

    const ads = response.data.data;

    for (const ad of ads) {
      console.log(`Ad ID: ${ad.ad_creative_body}`);
      console.log(`Video URL: ${ad.creative_media_url}\n`);
    }
  } catch (error) {
    console.error('Error fetching ads:', error.response?.data || error.message);
  }
}

// Запуск функции
getAdVideos('example_keyword');