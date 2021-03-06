const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const keys = require("./keys");

const User = require("../models/user-model");

// // serialize the user.id to save in the cookie session
// // so the browser will remember the user when login
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // deserialize the cookieUserId to user in the database
// passport.deserializeUser((id, done) => {
//   User.findById(id)
//     .then(user => {
//       done(null, user);
//     })
//     .catch(e => {
//       done(new Error("Failed to deserialize an user"));
//     });
// });

passport.serializeUser(function(user, done) {
  console.log(user.id);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
/* passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
}); */

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      //callbackURL: "/auth/twitter/redirect"
      callbackURL: "http://localhost:4000/auth/twitter/redirect"
    },
    async (token, tokenSecret, profile, done) => {
      /* const currentUser = await User.findOne({
        twitterId: profile._json.id_str
      });
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          twitterId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url
        });
        newUser.save();
        if (newUser) {
          done(null, newUser);
        }
      } */

      const newUser = await new User({
        name: profile._json.name,
        screenName: profile._json.screen_name,
        twitterId: profile._json.id_str,
        profileImageUrl: profile._json.profile_image_url
      });
      done(null, newUser);
      //done(null, currentUser);
    }
  )
);

module.exports = passport;
