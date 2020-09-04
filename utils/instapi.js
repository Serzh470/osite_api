/** Access to instagram account and get last 8 photos with links and captions */
const got = require("got");
const CronJob = require("cron").CronJob;

// get initial intagram token value
require("dotenv").config();
const token = process.env.INSTAGRAM_TOKEN;

/** Check access token every day at 00:00. If token expires in less than 24 housr, refresh it. */
const job = new CronJob(
  "0 0 * * * *",
  async function () {
    const url = `https://graph.instagram.com/refresh_access_token ?grant_type=ig_refresh_token &access_token=${token}`;
    const response = await got(url);
    const { access_token, expires_in } = JSON.parse(response.body);
    if (expires_in <= 86400) {
      token = access_token;
    }
  },
  null,
  true,
  "Europe/Moscow",
);

module.exports.getPosts = async (quantity = 8) => {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp&access_token=${token}`;
    const response = await got(url);
    const { data } = JSON.parse(response.body);
    return data.slice(0, quantity);
  } catch (error) {
    console.log(error.response.body);
    return [];
  }
};
