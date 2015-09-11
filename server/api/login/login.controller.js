'use strict';

//var _ = require('lodash');TODO - DELETE
var shopifyStrategy = require('xoob-passport-shopify').Strategy;
var passport = require('passport');
var urlJoin = require('url-join');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Redirect the user to shopify to verify app installation (ie allow the app to access their data)
exports.authenticateShopify = function(req, res, next) {
  console.log("about to construct passport");
  console.log('ClientID=' + process.env.CLIENT_ID);
  if (typeof req.query.shop !== 'string')
    return res.status(500).send('req.query.shop was not a string, e.g. /auth/shopify?shop=your-shop-name')

  //var time = new Date().getTime();

  passport.use
  (
      'shopify',
      new shopifyStrategy
      (
        {
          clientID: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          callbackURL: getCallbackURL(req),
          myshopifyDomain: req.query.shop
        },
        function(accessToken, refreshToken, profile, done) {
          //Here you need to save/ fetch user from database, and add user to the session.
          console.log("access token is " + accessToken);
          return done(null, profile);
        }
      )
  );

  passport.authenticate('shopify', {
    scope: [ process.env.SHOPIFY_API_SCOPE ],
    shop: req.query.shop
  })(req, res, next)
};

var getCallbackURL = function(req){
  return urlJoin(req.getUrl(), '/callback');
}

exports._getCallbackURL = getCallbackURL;

//Handle callback from shopify.
//Need to perform security checks on the data returned
//If success then request a token from shopify
//If failed checks then show the user an error
exports.authenticateShopifyCallbackCheckForErrors = function(req, res, next){
  console.log("in error check");

  //Actual response from installing
  //http://localhost:9000/api/login/auth/callback?code=4c8af2a20ffe2a7521c64c8fd9e17de5&hmac=e2329b3e2ad99c8544e3ee5d1e6ddab0845d4d3a19340d67925a519b78136b2f&shop=steelsoft-dev-store.myshopify.com&signature=a3ac4ce0a1fbdbb8aefb0e8c691cd9c2&timestamp=1441661289


  //Ensure the provided nonce is the same one that your application provided to Shopify during
  //    the Step 2: Asking for permission.
  //Ensure the provided hmac is valid. The hmac is signed by Shopify as explained below, in the Verification section.
  //Ensure the provided hostname parameter is a valid hostname, ends with myshopify.com, and does not contain characters
  //    other than letters (a-z), numbers (0-9), dots, and hyphens.

  passport.authenticate('shopify', {
    failureRedirect: '/'
    })(req, res, next);
}

exports.authenticateShopifyCallbackSuccess = function(req, res){
  console.log("successful authentication");

  res.send({ message: 'successfully logged in', user: req.user });
}

exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
    res.redirect('/auth/');
}

function handleError(res, err) {
  return res.status(500).send(err);
}
