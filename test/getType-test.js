
module.exports = function testGetType () {
  describe('#getType', function () {
    var getType = require('../lib/utils').getType;

    it('should return "string" for strings', function () {
      getType('').should.equal('string');
      getType('a').should.equal('string');
      getType('1').should.equal('string');
      getType(new String()).should.equal('string');
    });

    it('should return "number" for numbers', function () {
      getType(0).should.equal('number');
      getType(new Number()).should.equal('number');
    });

    it('should return "boolean" for booleans', function () {
      getType(true).should.equal('boolean');
      getType(false).should.equal('boolean');
      getType(new Boolean(true)).should.equal('boolean');
    })

    it('should return "object" for objects', function () {
      getType({}).should.equal('object');
      getType({ 0: 'foo'}).should.equal('object');
      getType(new Object()).should.equal('object');
    });

    it('should return "array" for arrays', function () {
      getType([]).should.equal('array');
      getType(new Array()).should.equal('array');
    });

    it('should return "function" for functions', function () {
      getType(function foo () {}).should.equal('function');
    });

    it('should return "regexp" for regular expressions', function () {
      getType(/foo/).should.equal('regexp');
      getType(new RegExp('foo')).should.equal('regexp');
    });

    it('should return "date" for dates', function () {
      getType(new Date()).should.equal('date');
      getType(new Date('December 17, 1995 03:24:00')).should.equal('date');
      getType(new Date('1995-12-17T03:24:00')).should.equal('date');
      getType(new Date(1995, 11, 17)).should.equal('date');
      getType(new Date(1995, 11, 17, 3, 24, 0));
    });

    it('should return "error" for errors', function () {
      getType(new Error()).should.equal('error');
    });

    it('should return "undefined" for undefined', function () {
      getType().should.equal('undefined');
    });

    it('should return "null" for null', function () {
      getType(null).should.equal('null');
    });

    it('should return "NaN" for NaN', function () {
      getType(NaN).should.equal('NaN');
    });

  });
};
