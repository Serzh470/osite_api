const instapi = require("../utils/instapi");
const errorHandler = require("../utils/error");

module.exports.getLastPosts = async function (req, res) {
  try {
    // const posts = instapi.getPosts();
    const posts = {message: 'test message'};
    res.status(200).json(posts);
  } catch (e) {
    errorHandler(res, e);
  }
};
