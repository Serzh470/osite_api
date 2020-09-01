/** Access to instagram account and get last 8 photos with links and captions */
const instagramPosts = require("instagram-posts");

require("dotenv").config();
console.log(`process.env.INSTAGRAM_UNAME: ${process.env.INSTAGRAM_UNAME}`);
const uname = process.env.INSTAGRAM_UNAME;

module.exports.getPosts = async (quantity = 8) => {
  try {
    console.log("get posts for user ", uname);
    return {posts:'sdfsdf'}
    const data = await instagramPosts(uname, { count: quantity });
    /*
      [
          {
              id: 'BRWBBbXjT40',
              username: 'cats_of_instagram',
              time: 1488904930,
              type: 'image',
              likes: 809,
              comments: 10,
              text: 'This is my post',
              media: 'https://instagram.fbma1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/1231231_123123_1231231.jpg',
              …
          },
          …
      ]
    */
    const posts = data.map((item) => ({
      id: item.id,
      link: item.url,
      src: item.media,
      alt: item.text,
    }));
    return posts;
  } catch (err) {
    console.log("No instagram data. Error: ", err);
    return [];
  }
};
