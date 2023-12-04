//

const redis = require('redis');

// 创建Redis客户端
const client = redis.createClient({
    host: 'r-bp1qoo7xhookv0hk3q.redis.rds.aliyuncs.com', // Redis服务器的主机名
    port: 6379, // Redis服务器的端口号,
    "auth_pass": "MantisRedis518",
    // url: 'redis://:MantisRedis518@r-bp1qoo7xhookv0hk3q.redis.rds.aliyuncs.com:6379/0'
})
// 连接到Redis服务器
client.on('connect', () => {
    console.log('Connected to Redis');
});

// 连接错误处理
client.on('error', (err) => {
    console.error('Redis connection error', err);
});
module.exports = client