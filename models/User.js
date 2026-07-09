const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    auth0Id: String,
    displayName: String
});

mongoose.model('User', userSchema);
