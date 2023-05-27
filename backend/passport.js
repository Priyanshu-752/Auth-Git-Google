const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;


const GOOGLE_CLIENT_ID ="752056278657-dln2c6b902p2s0ucu8u4us6j34g9edvj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET ="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";

GITHUB_CLIENT_ID ="9ae10b461aa42f0946aa";
GITHUB_CLIENT_SECRET ="ed0adacd701e27f72d307c38b913b1046e33b48e";



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
    // forMDB
    // const user ={
    //     username: profile.displayName,
    //     avatar: profile.photos[0],

    // };
    // user.save
  }
));

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})