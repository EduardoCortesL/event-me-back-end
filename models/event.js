var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventsSchema = new Schema ({
    creatorId: {type: Schema.Types.ObjectId, ref: 'Users'},
    name: {type: String, required: false},
    date: {type: Date, required: true},
    end: {type: Date, required: true},
    location: {type: String, required: false},
    guest: {type: [], required: false}
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Event', eventsSchema);