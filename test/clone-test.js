
module.exports = function testClone () {
  describe('#clone', function describeClone () {
    var clone = require('../lib/utils').clone;

    var parent;
    var cloned;
    var keys;

    it('should copy all of parents\' own properties into cloned', function () {
      parent = { 
        a: 1, 
        b: 'foo'
      };

      cloned = clone(parent);

      keys = Object.keys(cloned);

      keys.should.have.a.length(2);

      cloned.should.have.a.property('a', parent.a);
      cloned.should.have.a.property('b', parent.b);
      cloned.should.not.have.a.property
    });

    it('should return an object that is not equal to parent', function () {
      parent = {};
      cloned = clone(parent);

      (cloned === parent).should.be.false;
      (cloned == parent).should.be.false;

    });

    it('should return an empty object if parent is falsey', function () {
      parent = false; 
      cloned = clone(parent);

      (typeof cloned === 'object').should.be.true;

      keys = Object.keys(cloned);

      keys.should.have.length(0);

    });
  });
};
