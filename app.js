const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT =process.env.PORT || 5000;

const products_route= require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi,I am Live")
    });

//middleware or To Set Router
app.use("/api/products", products_route)

    const Start= async () => {
        try{
            await connectDB();
            app.listen(PORT, ()=> {
                console.log(`${PORT}! Yes I am Connected`);
;            });
        } catch (error){
            console.log(error);
        }
    }


    Start();