const shortId = require("shortid");
const Url = require("../models/urlModel");

exports.create = async (req, res) => {
  const { url } = req.body;

  var urlRecord = new Url();
  urlRecord.url = url;
  urlRecord.code = shortId.generate();

  await urlRecord.save();

  res.status(200).json({ error: null, shortened_code: urlRecord.code });
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error while generating shortened url"
    });
  }
};

exports.redirectToUrl = async (req, res) => {
  const code = req.params.code;
  if (!shortId.isValid(code)) {
    return res.status(400).json({ error: "Shortened Url is not valid" });
  }

  try {
    const url = await Url.findOne({ code });
    if (!url) {
      return res.status(404).json({ error: "Url not found" });
    }

    res.redirect(url.url);
  } catch (error) {
    res.status(500).json({
      error: "Error while generating shortened url"
    });
  }
};
