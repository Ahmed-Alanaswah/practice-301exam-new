"use strict";
const express = require("express");

const cors = require("cors");
const { getData } = require("./controller/color.controller");
const mongoose = require("mongoose");
const {
	creatFavColor,
	getFavColor,
	deletFAvData,
	updateColorData,
} = require("./controller/color.crud.controller");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Colors", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.listen(PORT, () => {
	console.log(`start server with ${PORT}`);
});

app.get("/color", getData);
app.post("/color/favourite", creatFavColor);
app.get("/color/favourite", getFavColor);
app.delete("/color/favourite/:slug", deletFAvData);
app.put("/color/favourite/:slug", updateColorData);
