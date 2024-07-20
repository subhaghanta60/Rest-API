const Product = require("../model/products");
const getAllproducts = async(req,res) => {

    const { company,name,featured,sort,select} =req.query;
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

    let apiData=Product.find(queryObject);


    if(sort){
        let sortFix=sort.replace(",", "");
        apiData =apiData.sort(sortFix);
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData =apiData.select(selectFix);
    }

    let page=Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;

    let skip =(page-1)*limit;

    apiData = apiData.skip(skip).limit(limit);

    const mydata= await apiData;

    res.status(200).json({mydata, nbHits:mydata.length});
}

const getAllproductTesting = async(req,res) => {

    const mydata= await Product.find({});

    res.status(200).json({mydata});
}


module.exports ={getAllproducts,getAllproductTesting};