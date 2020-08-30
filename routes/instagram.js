const express = require("express");
const controller = require("../controllers/instagram");

const router = express.Router();

router.get("/posts", controller.getLastPosts);

module.exports = router;
