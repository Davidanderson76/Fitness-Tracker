//install dependencies//
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//PORT//
const PORT = process.env.PORT || 3000;
const app = express();