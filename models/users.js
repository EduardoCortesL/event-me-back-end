var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Users = new Schema ({
    creatorId: {type: Schema.Types.ObjectId},
    authId: {type: String, required: true}
});

module.exports = mongoose.model('Users', Users);