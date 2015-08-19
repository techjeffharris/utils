
module.exports = function testXOR () {
  describe('#XOR', function describeXOR () {

    var XOR = require('../lib/utils').XOR;

    it('should return true only if one value is truthy and the other is falsey', function () {
      XOR(true, false).should.be.true;
      XOR(false, true).should.be.true;
      XOR(true, true).should.be.false;
      XOR(false, false).should.be.false;
    });
  });
};
