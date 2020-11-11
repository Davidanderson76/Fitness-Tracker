//install dependencies//
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//PORT//
const PORT = process.env.PORT || 3000;
const app = express();

//using logger//
app.use(logger("dev"));

//parser//
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//static files//
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittrack", {useNewUrlParser: true});

//route//
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

//PORT listening//
app.listen(PORT, () => {
    console.log(`App up and running on port ${PORT}..`);
})
