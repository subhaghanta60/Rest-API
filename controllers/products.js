const Product = require("../model/products");
const getAllproducts = async(req,res) => {

    const { company,name,featured } =req.query;
    const queryObject ={};

    if(company){
        queryObject.company= { $regex:company, $options: "i"};
    }
    if(name){
        queryObject.name= { $regex:name, $options: "i"};
    }
    if(featured){
        queryObject.name= { $regex:featured, $options: "i"};
    }

    const mydata= await Product.find(queryObject);

    res.status(200).json({mydata});
}

const getAllproductTesting = async(req,res) => {

    const mydata= await Product.find({});

    res.status(200).json({mydata});
}


module.exports ={getAllproducts,getAllproductTesting};