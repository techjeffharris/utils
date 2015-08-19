
module.exports = function testGPS () {
  describe('#GPSRegExp', function describeGPSRegExp () {
    var GPSRegExp = require('../lib/utils').GPSRegExp;

    it('should strictly match latitude and longitude values that fall within the correct range', function testValidCoordinatePairs () {

      GPSRegExp.test('+90, -127.554334').should.be.true;
      GPSRegExp.test('45, 180').should.be.true;
      GPSRegExp.test('-90, -180').should.be.true;
      GPSRegExp.test('-90.000, -180.0000').should.be.true;
      GPSRegExp.test('+90, +180').should.be.true;
      GPSRegExp.test('47.1231231, 179.99999999').should.be.true;
      GPSRegExp.test('47.1231231,179.99999999').should.be.true;

      GPSRegExp.test('').should.be.false;
      GPSRegExp.test('-90., -180.').should.be.false;
      GPSRegExp.test('+90.1, -100.111').should.be.false;
      GPSRegExp.test('-91, 123.456').should.be.false;
      GPSRegExp.test('045, 180').should.be.false;

    });
  });

  describe('#LatRegExp', function describeLatRegExp () {
    var LatRegExp = require('../lib/utils').LatRegExp;

    it('should match valid latitude values', function testValidLatValues () {
      LatRegExp.test('90').should.be.true;
      LatRegExp.test('+90').should.be.true;
      LatRegExp.test('-90').should.be.true;
      LatRegExp.test('-90.000').should.be.true;
      LatRegExp.test('47.1231231').should.be.true;

      LatRegExp.test('').should.be.false;
      LatRegExp.test('-90.').should.be.false;
      LatRegExp.test('+90.1').should.be.false;
      LatRegExp.test('-91').should.be.false;
      LatRegExp.test('045').should.be.false;
    });
  });

  describe('#LngRegExp', function describeLngRegExp () {
    var LngRegExp = require('../lib/utils').LngRegExp;

    it('should match valid longitude values', function testValidLngValues () {
      LngRegExp.test('180').should.be.true;
      LngRegExp.test('+180').should.be.true;
      LngRegExp.test('-180').should.be.true;
      LngRegExp.test('-180.000').should.be.true;
      LngRegExp.test('179.99999999').should.be.true;

      LngRegExp.test('').should.be.false;
      LngRegExp.test('-180.').should.be.false;
      LngRegExp.test('+180.1').should.be.false;
      LngRegExp.test('-181').should.be.false;
      LngRegExp.test('045').should.be.false;
    });
  });
};
