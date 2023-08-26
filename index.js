const express = require('express');
const app = express();
const port = 9000;


const routes = require('./routes/contactRoutes');

app.use("/api",routes );

app.get( '/',(req,resp) =>{
    resp.status(200).send(
         "Hii I m online"
    )
})


app.listen(port, () =>{
    console.log("http://localhost${port}");

})