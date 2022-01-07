var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    authId: {type: Number, required: true}
},{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);