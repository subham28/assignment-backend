const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "your-key",
  TWITTER_CONSUMER_SECRET: "your-key",
  TWITTER_ACCESS_TOKEN: "your-key",
  TWITTER_TOKEN_SECRET: "your-key"
};

const MONGODB = {
  MONGODB_URI:
    "mongodb+srv://admin:Admin@123@cluster0-2uwtn.mongodb.net/test?retryWrites=true&w=majority"
};
const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
