const mongoose = require('mongoose');

uri ="mongodb+srv://subhaghanta60:Subha123@cluster0.pio4udo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = () => {
    
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}


module.exports = connectDB