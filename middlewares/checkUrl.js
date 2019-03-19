const Url = require("../models/urlModel");
const validUrl = require("valid-url");

module.exports = async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url || !validUrl.isWebUri(url)) {
      return res.status(400).json({ error: "Url given is not valid" });
    }
    const urlRecord = await Url.findOne({ url });
    if (urlRecord) {
      return res
        .status(200)
        .json({ error: null, shortened_code: urlRecord.code });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error while generating shortened url"
    });
  }
};
