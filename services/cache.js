const mongoose = require('mongoose');
const redis = require('redis');

const redisClient = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

redisClient.connect().catch(console.error);

module.exports = redisClient;

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');

    return this;
};

mongoose.Query.prototype.exec = async function() {
    if(!this.useCache) {
        return exec.apply(this, arguments);
    }

    const key = JSON.stringify(Object.assign({}, this.getQuery(), {
        collection: this.mongoose.collection.name
    }));

    const cacheValue = await redisClient.hget(this.hashKey, key);

    if(cacheValue) {
        const doc = JSON.parse(cacheValue);

        return Array.isArray(doc) ? doc.map((d) => new this.model(d))  : new this.model(doc);
    }

    const result = await exec.apply(this, arguments);

    redisClient.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);

    return result;
};

module.exports = {
    clearHash(hashKey) {
        redisClient.del(JSON.stringify(hashKey));
    }
}