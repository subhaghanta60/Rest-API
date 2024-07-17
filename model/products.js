const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: [true, "Price Must Be Provided"],
    },
    featured: {
        type:Boolean,
        default: false,
    },
    rating: {
        type:Float,
        default: 4.9,
    },
    createdAt: {
        type:Date,
        default:Date.now(),
    },
    company: {
        type:String,
        enum: {
            values:["apple","Samsung","Dell","MI","Ratio"],
            message: `{VALUE} is not Supported`
        },
    },
});

module.export = mongoose.model('Product',productSchema);