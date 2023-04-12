const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
     }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tally: {
        type: Schema.Types.Mixed,
        default: {}
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);