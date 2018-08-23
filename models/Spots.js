var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpotSchema = new Schema({
    spotName: {
        type: String, required: true,
        unique: true
    },
    spotAddress: {
        type: String, required: true,
        unique: true
    },
    spotCity: {
        type: String, required: true,
        unique: false
    },
    spotState: {
        type: String, required: true,
        unique: false
    },
    spotRating: {
        type: String, required: false,
        unique: false
    }

});

SpotSchema.set('toJSON', {getters: true, virtuals: true});


module.exports = mongoose.model('Spot', SpotSchema);