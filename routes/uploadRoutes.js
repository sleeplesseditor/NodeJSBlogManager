const AWS = require('@aws-sdk/core');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const uuid = require('uuid');

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
  },
  region: 'us-west-2',
});

module.exports = app => {
    app.get('/api/upload', requireLogin, (req, res) => {
        const fileKey = `${req.user.id}/${uuid()}.jpeg`;

        s3.getSignedUrl('putObject', {
            Bucket: 'blog-manager-bucket',
            ContentType: 'jpeg',
            Key: fileKey
        }, (err, url) => res.send({key, url}))
    });
}

