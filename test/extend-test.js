
module.exports = function testExtend () {
  describe('#extend', function describeExtend () {
    var extend = require('../lib/utils').extend;

    var original
    var extensions;
    var extended;

    it('should return a new object, not a reference to the original or extensions', function () {

      original    = {};
      extensions  = {};
      extended    = extend(original, extensions);

      (extended === original).should.be.false;
      (extended === extensions).should.be.false;

    });

    it('should provide default values from original', function () {

      original = {
        a: 'foo',
        b: 'bar'
      };

      extensions = {};

      extended = extend(original, extensions);

      extended.should.have.a.property('a', original.a);
      extended.should.have.a.property('b', original.b);

    });

    it('should overwrite original properties with those found in extensions', function () {

      original = { 
        a: 'foo', 
        b: 'bar', 
        c: 'baz' 
      };

      extensions = { 
        a: true, 
        b: ['1', 2, '4']
      };

      extended = extend(original, extensions);

      extended.should.have.a.property('a', extensions.a);
      extended.should.have.a.property('b', extensions.b);
      extended.should.have.a.property('c', original.c);

    });
    
    it('should create properties not found in original if found in extensions', function () {

      original = { 
        a: 'foo', 
        b: 'bar', 
        c: 'baz' 
      };

      extensions = { 
        d: 'this is new property, d'
      };

      extended = extend(original, extensions);

      extended.should.have.a.property('a', original.a);
      extended.should.have.a.property('b', original.b);
      extended.should.have.a.property('c', original.c);
      extended.should.have.a.property('d', extensions.d);

    });

    it('should use empty object literals in place of falsey inputs', function () {

      original = false;
      extensions = { 
        d: 'this is new property, d'
      };

      extended = extend(original, extensions);

      extended.should.not.have.a.property('a');
      extended.should.not.have.a.property('b');
      extended.should.not.have.a.property('c');
      extended.should.have.a.property('d', extensions.d);

      original = {
        a: 'foo', 
        b: 'bar'
      }

      extensions = false;

      extended = extend(original, extensions);

      extended.should.have.a.property('a', original.a);
      extended.should.have.a.property('b', original.b);
      extended.should.not.have.a.property('c');
      extended.should.not.have.a.property('d');

      original = false; 
      original = false;

      extended = extend(original, extensions);

      extended.should.not.have.a.property('a');
      extended.should.not.have.a.property('b');
      extended.should.not.have.a.property('c');
      extended.should.not.have.a.property('d');

    });


  });
}

