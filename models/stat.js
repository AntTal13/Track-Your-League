const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
    stats: Number,
    player: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
     }],
    game: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
     }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Stat', statSchema);