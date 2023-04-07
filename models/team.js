const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    winLoss: {
      type: String,
      required: true
    },
    opponent: String,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
     }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);