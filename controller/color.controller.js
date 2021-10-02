"use strict";

const superagent = require("superagent");

const getData = async (req, res) => {
	superagent
		.get(
			`http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
		)
		.then((data) => {
			const responseData = data.body.drinks.map((color) => {
				return color;
			});
			res.send(responseData);
		});
};

module.exports = { getData };
