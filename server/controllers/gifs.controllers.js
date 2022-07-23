const Gif = require("../models/Gifs.models")
const { StatusCodes } = require("http-status-codes");

const getGifs = async(req,res) => {
    const gifs = await Gif.find({});
    await Gif.deleteMany({});
    res.status(StatusCodes.OK).send(gifs);
};

const sendGifs = async(req, res) => {
    const gif = await Gif.create(req.body);
    res.status(StatusCodes.CREATED).send(gif);
};

module.exports = {getGifs, sendGifs};