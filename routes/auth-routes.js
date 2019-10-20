const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/other";
var Twitter = require("twitter");
const keys = require("../config/keys");

var client = new Twitter({
  consumer_key: keys.TWITTER_CONSUMER_KEY,
  consumer_secret: keys.TWITTER_CONSUMER_SECRET,
  access_token_key: keys.TWITTER_ACCESS_TOKEN,
  access_token_secret: keys.TWITTER_TOKEN_SECRET
});

//when login is successfull
router.get("/login/success", (req, res) => {
  //console.log("response ", res);
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
  })
);

router.post("/validate", (req, res) => {
  console.log("request ", req.body);
  // console.log("response ",res)
});

router.post("/search/tweet", async (req, res) => {
  console.log("request ", req.body.text);
  var resFromApi = await getTweets(req.body.text);
  var statusTextArr = [];
  resFromApi.statuses.forEach(function(tweet) {
    statusTextArr.push(tweet.text);
  });

  res.status(200).json({
    responseObj: statusTextArr
  });
});

function getTweets(param) {
  return client.get("search/tweets", { q: param }).then(data => {
    return data;
  });
}
module.exports = router;
