//install dependencies//
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


//PORT//
const app = express();
const PORT = process.env.PORT || 8000;

//using logger//
app.use(logger("dev"));

//parser//
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//static files//
app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

//route//
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//PORT listening//
app.listen(PORT, () => {
    console.log(`App up and running on port ${PORT}..`);
})
