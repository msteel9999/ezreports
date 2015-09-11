'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var loginController = require('./login.controller.js');
var url = require('url');

describe('GET /api/login/auth', function(){
  describe('when missing shop name', function(){
    it('should throw error', function (done) {
      request(app)
        .get('/api/login/auth')
        .expect(500, done);
    });
  });

  var mockRequest = {};
  mockRequest.protocol = 'http';
  mockRequest.host = 'localhost:9000';
  mockRequest.originalUrl = '/api/auth?shop=steelsoft-dev-store.myshopify.com';

  mockRequest.getUrl = function(){
    return mockRequest.protocol + "://" + mockRequest.host + url.parse(mockRequest.originalUrl).pathname;
  }

  describe('_getCallback', function(){
    it('should return the correct url', function(){
      var callbackURL = loginController._getCallbackURL(mockRequest);
      var expectedCallbackURL = 'http://localhost:9000/api/auth/callback';

      callbackURL.should.equal(expectedCallbackURL);
    });
  });
});



//describe('GET /api/login/authenticateShopify', function() {
//
//  it('should redirect to shopify permission prompt', function(done) {
//    request(app)
//      .get('/api/things')
//      .expect(200)
//      .expect('Content-Type', /json/)
//      .end(function(err, res) {
//        if (err) return done(err);
//        res.body.should.be.instanceof(Array);
//        done();
//      });
//  });
//
//
//  it('should redirect to shopify permission prompt', function(done){
//    request(app)
//      .get('/fail_id')
//      .expect('Location', /\//, done);
//  });
//});
