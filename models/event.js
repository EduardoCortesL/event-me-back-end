var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventsSchema = new Schema ({
    creatorId: {type: String, required: false},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    end: {type: Date, required: true},
    location: {type: String, required: true},
    guest: {type: [], required: false}
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Event', eventsSchema);