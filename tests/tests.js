var assert = require('assert');
var codePoints = require('../code-points');
var symbols = require('../symbols');

describe('IDN allowed code points', function() {
	it('contains expected code points', function() {
		// U+06A1 ARABIC LETTER DOTLESS FEH
		assert(codePoints.indexOf(0x06A1) >= 0);
		assert(symbols.indexOf('\u06A1') >= 0);
	});
	it('doesn’t contain known banned code points', function() {
		// U+1F631 FACE SCREAMING IN FEAR
		assert(codePoints.indexOf(0x1F631) == -1);
		assert(symbols.indexOf('\uD83D\uDE31') == -1);
	});
});
