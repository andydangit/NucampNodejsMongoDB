const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: true
});

//create model, Favorite, for the data
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;