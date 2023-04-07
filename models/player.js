const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    stats: [{
        type: Schema.Types.ObjectId,
        ref: 'Stat'
     }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
     }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);