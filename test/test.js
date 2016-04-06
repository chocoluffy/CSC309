var chai = require('chai');
var should = chai.should();
var User = require('/Users/Bear/Documents/AirLoft-master/app_api/models/users.js');
//var User = require('/Users/Bear/Documents/AirLoft-master/app_api/controllers/authentication.js');

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User({
        email: 'test@gmail.com',
        name: 'apple'});

      user.save(function(err) {
        if (err) throw err;
        done();
      });
    });
  });



});
