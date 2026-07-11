const mongoose = require('mongoose');
const redis = require('redis');

const redisClient = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

redisClient.connect().catch(console.error);

module.exports = redisClient;

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function() {
    const key = JSON.stringify(Object.assign({}, this.getQuery(), {
        collection: this.mongoose.collection.name
    }));

    const cacheValue = await redisClient.get(key);

    if(cacheValue) {

    }

    const result = await exec.apply(this, arguments);
};