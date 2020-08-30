/** Access to instagram account and get last 8 photos with links and captions */
const Instagram = require("node-instagram").default;

require("dotenv").config();

console.log(`process.env.OSITE_INSTAGRAM_TOKEN: ${process.env.OSITE_INSTAGRAM_TOKEN}`);

module.exports.getPosts = async function getPosts(quantity = 9) {
  try {
    const instagram = new Instagram({
      accessToken: process.env.OSITE_INSTAGRAM_TOKEN,
    });
    // get last 8 photos
    const data = await instagram.get("users/self/media/recent", {
      count: quantity,
    });

    let images = data.data.map((item) => ({
      id: item.id,
      link: item.link,
      src: item.images.standard_resolution.url,
      alt: item.caption.text,
    }));

    return images;
  } catch (err) {
    console.log("No instagram data. Error: ", err);
    return [];
  }
};
