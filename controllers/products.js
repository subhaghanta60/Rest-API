const getAllproducts = async(req,res) => {

    res.status(200).json({msg:"I am Get All Products"});
}

const getAllproductTesting = async(req,res) => {
    res.status(200).json({msg:"I am Get All Products Testing"});
}


module.exports ={getAllproducts,getAllproductTesting};