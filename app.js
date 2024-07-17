const express =require("express")
const app = express();

const PORT =process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hi,I am Live")
    });

    const Start= async () => {
        try{
            app.listen(PORT, ()=> {
                console.log(`${PORT}! Yes I am Connected`);
;            });
        } catch (error){
            console.log(error);
        }
    }


    Start();