const express = require('express');

const app = express();


app.use(()=>{
    console.log("Hey");
});

app.listen(process.env.PORT || 3002)