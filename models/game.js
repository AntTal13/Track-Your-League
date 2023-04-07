const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: String,
    winLoss: {
      type: String,
      required: true
    },
    opponent: String,
    boxScore: [{
        type: Schema.Types.ObjectId,
        ref: 'Stat'
     }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);