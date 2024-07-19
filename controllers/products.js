const Product = require("../model/products");
const getAllproducts = async(req,res) => {

    const { company } =req.query;
    const queryObject ={};

    if(company){
        queryObject.company= company;
       
    }

    const mydata= await Product.find(queryObject);

    res.status(200).json({mydata});
}

const getAllproductTesting = async(req,res) => {

    const mydata= await Product.find({});

    res.status(200).json({mydata});
}


module.exports ={getAllproducts,getAllproductTesting};