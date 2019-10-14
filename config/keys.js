const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "szdxmjaRoV8U4i5kA45AJeA3l",
  TWITTER_CONSUMER_SECRET: "exbM4FFjGjZC3yu3Q5OIPDN73tek9EWi7OeRqO2DKeM5L9IVIV",
  TWITTER_ACCESS_TOKEN: "111325243-kcUsCTesGziQGvqJxTNgzqehjRhTWG1bZUL9QEON",
  TWITTER_TOKEN_SECRET: "43aceTkT6eGxQIb0QwddboZ0zwcGr3BaJgPBfkztkCrYt"
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
