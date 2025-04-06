const redis = require('redis');
const redisClient = redis.createClient({
  host: '127.0.0.1', 
  port: 6379,
});
redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect();
module.exports = redisClient;