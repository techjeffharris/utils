
var BYTE  = 1;
var KB    = 1024 * BYTE;
var MB    = 1024 * KB;
var GB    = 1024 * MB;
var TB    = 1024 * GB;
var PB    = 1024 * TB;

var MILLISECOND = 1;
var SECOND      = 1000  * MILLISECOND;
var MINUTE      = 60    * SECOND;
var HOUR        = 60    * MINUTE;
var DAY         = 24    * HOUR;
var WEEK        = 7     * DAY;
var MONTH       = 30    * DAY;
var YEAR        = 365   * DAY;

// 
// "This one will strictly match latitude and longitude values that fall within the correct range:"
// ...
// Matches
// 
// +90.0, -127.554334 
// 45, 180
// -90, -180
// -90.000, -180.0000
// +90, +180
// 47.1231231, 179.99999999
// Doesn't Match
// 
// -90., -180.
// +90.1, -100.111
// -91, 123.456
// 045, 180
// 
// @see: http://stackoverflow.com/a/18690202/1690165
// 
var GPSRegExp = new RegExp(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)

// matches valid latitude strings
var LatRegExp = new RegExp(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/);

// matches valid longitude strings
var LngRegExp = new RegExp(/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/);

// @see - http://killdream.github.io/blog/2011/10/understanding-javascript-oop/index.html

// Aliases for the rather verbose methods on ES5
var descriptor  = Object.getOwnPropertyDescriptor, 
  properties  = Object.getOwnPropertyNames, 
  define_prop = Object.defineProperty;

function clone(parent) {

  parent = parent || {};

  var cloned = {};
  
  properties(parent).forEach(function(key) {
    define_prop(cloned, key, descriptor(parent, key)) 
  });

  return cloned;
};

function extend(original, extensions) {       

  original = original || {};
  extensions = extensions || {};

  properties(extensions).forEach(function(key) {
    define_prop(original, key, descriptor(extensions, key)) 
  });

  return original;
};

function getType (obj) {
  return (Number.isNaN(obj)) ? 'NaN' : ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

// returns that to which an XOR expression would evaluate
function XOR (a,b) {
  return ( a || b ) && !( a && b );
};


module.exports = {

  clone: clone,

  // emitter: function () {
  //     var cloned 
  // }
  extend: extend,
  getType: getType,
  XOR: XOR,
  GPSRegExp: GPSRegExp,
  LatRegExp: LatRegExp,
  LngRegExp: LngRegExp,

  BYTE: BYTE,
  KB: KB,
  MB: MB,
  GB: GB,
  TB: TB,
  PB: PB,
  
  MILLISECOND: MILLISECOND,
  SECOND: SECOND,
  MINUTE: MINUTE,
  HOUR: HOUR,
  DAY: DAY,
  WEEK: WEEK,
  MONTH: MONTH,
  YEAR: YEAR
};
