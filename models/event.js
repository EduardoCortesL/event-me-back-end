var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Events = new Schema ({
    creatorId: {type: Schema.Types.ObjectId, ref: 'Users'},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    end: {type: Date, required: true},
    location: {type: String, required: true},
    guesst: {type: [], required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}

});

module.exports = mongoose.model('Events', Events);