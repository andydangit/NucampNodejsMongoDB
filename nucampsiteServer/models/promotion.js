const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//loads currency type into Mongoose
require('mongoose-currency').loadType(mongoose); 

 // shorthand for mongoose.Types.Currency
const Currency = mongoose.Types.Currency;

// Schema for Promotion Schema 
const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

// create Model and Partner data
const Promotion= mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;