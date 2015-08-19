
var utils = require('../lib/utils');

require('should');

describe('utils', function describeUtils () {

  var BYTE  = 1,
      KB    = 1024 * BYTE,
      MB    = 1024 * KB,
      GB    = 1024 * MB,
      TB    = 1024 * GB,
      PB    = 1024 * TB;

  var MILLISECOND = 1,
      SECOND      = 1000  * MILLISECOND,
      MINUTE      = 60    * SECOND,
      HOUR        = 60    * MINUTE,
      DAY         = 24    * HOUR,
      WEEK        = 7     * DAY,
      MONTH       = 30    * DAY,
      YEAR        = 365   * DAY;

  describe('#BYTE', function describeBYTE () {
    it('should equal 1', function testBYTE () {
      utils.should.have.a.property('BYTE', BYTE);
    });
  });

  describe('#KB', function describeKB () {
    it('should equal ' + KB, function testKB () {
      utils.should.have.a.property('KB', KB);
    });
  });

  describe('#MB', function describeMB () {
    it('should equal ' + MB, function testMB () {
      utils.should.have.a.property('MB', MB);
    });

  });

  describe('#GB', function describeGB () {
    it('should equal ' + GB, function testGB () {
      utils.should.have.a.property('GB', GB);
    });
  });
  describe('#TB', function describeTB () {
    it('should equal ' + TB, function testTB () {
      utils.should.have.a.property('TB', TB);
    });
  });

  describe('#PB', function describePB () {
    it('should equal ' + PB, function testPB () {
      utils.should.have.a.property('PB', PB);
    });
  });

  describe('#MILLISECOND', function describeMILLISECOND () {
    it('should equal ' + MILLISECOND, function testMILLISECOND () {
      utils.should.have.a.property('MILLISECOND', MILLISECOND);
    });
  });

  describe('#SECOND', function describeSECOND () {
    it('should equal ' + SECOND, function testSECOND () {
      utils.should.have.a.property('SECOND', SECOND);
    });
  });

  describe('#MINUTE', function describeMINUTE () {
    it('should equal ' + MINUTE, function testMINUTE () {
      utils.should.have.a.property('MINUTE', MINUTE);
    });
  });

  describe('#HOUR', function describeHOUR () {
    it('should equal ' + HOUR, function testHOUR () {
      utils.should.have.a.property('HOUR', HOUR);
    });
  });

  describe('#DAY', function describeDAY () {
    it('should equal ' + DAY, function testDAY () {
      utils.should.have.a.property('DAY', DAY);
    });
  });
  
  describe('#WEEK', function describeWEEK () {
    it('should equal ' + WEEK, function testWEEK () {
      utils.should.have.a.property('WEEK', WEEK);
    });
  });

  describe('#MONTH', function describeMONTH () {
    it('should equal ' + MONTH, function testMONTH () {
      utils.should.have.a.property('MONTH', MONTH);
    });
  });

  describe('#YEAR', function describeYEAR () {
    it('should equal ' + YEAR, function testYEAR () {
      utils.should.have.a.property('YEAR', YEAR);
    });
  });

  require('./gps-test')();
  require('./clone-test')();
  require('./extend-test')();
  require('./getType-test')();
  require('./xor-test')();

});
