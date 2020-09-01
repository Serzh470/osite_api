const instapi = require("../utils/instapi");
const errorHandler = require("../utils/error");

module.exports.getLastPosts = async function (req, res) {
  try {
    const posts = await instapi.getPosts();
    res.status(200).json(posts);
  } catch (e) {
    errorHandler(res, e);
  }
};
