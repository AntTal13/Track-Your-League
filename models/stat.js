const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
    player: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
     }],
    game: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
     }],
     points: Number,
     assists: Number,
     rebounds: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Stat', statSchema);