"use strict ";

const mongoose = require("mongoose");

const colorSchema = mongoose.Schema({
	strDrink: String,
	slug: {
		type: String,
		unique: true,
		lowecase: true,
		trim: true,
	},
	strDrinkThumb: String,
	idDrink: String,
});

const colorModel = mongoose.model("Colors", colorSchema);

module.exports = { colorModel };
