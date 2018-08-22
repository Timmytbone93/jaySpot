var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BarSchema = new Schema({
    barName: {
        type: String, required: true,
        trim: true, unique: true
    },
    barPhone:{
      type:String, required:true
    },
    barOwnerID: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
        //ref to the user who is the bar Owner
    },
    bartender: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: false
        // ref to User id's of all Bartenders
    },
    street:{
        type:String, required:true
    },
    city:{
        type:String, required:true
    },
    zipCode:{
      type:String, required:true
    },
    deals: {
        type: Schema.Types.ObjectId, ref: 'Deal',
        required:false
    }
});

BarSchema.set('toJSON', {getters: true, virtuals: true});

module.exports = mongoose.model('Bar', BarSchema);