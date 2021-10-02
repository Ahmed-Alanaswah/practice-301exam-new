"use strict";
const { colorModel } = require("../module/modelColor");
const creatFavColor = async (req, res) => {
	const { strDrink, strDrinkThumb, idDrink } = req.body;
	const slug = strDrink.toLowerCase().split(" ").join("-");

	colorModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newColorModel = new colorModel({
				strDrink: strDrink,
				slug: slug,
				strDrinkThumb: strDrinkThumb,
				idDrink: idDrink,
			});

			newColorModel.save();
			res.send(newColorModel);
		}
	});
};

const getFavColor = async (req, res) => {
	colorModel.find({}, (error, data) => {
		res.send(data);
	});
};

const deletFAvData = (req, res) => {
	const slug = req.params.slug;

	colorModel.deleteOne({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			const data = await colorModel.find({});

			res.send(data);
		}
	});
};

const updateColorData = async (req, res) => {
	const slug = req.params.slug;
	const updateData = req.body;
	colorModel.findOne({ slug: slug }, (error, data) => {
		data.strDrink = updateData.strDrink;
		// data.strDrinkThumb = updateData.strDrinkThumb;
		data.idDrink = updateData.idDrink;
		data.save();
	});

	const data = await colorModel.find({});
	res.send(data);
};

module.exports = { creatFavColor, getFavColor, deletFAvData, updateColorData };
