#!/usr/bin/env phantomjs

var url = 'https://www.verisign.com/assets/allowedcode/idn-allowed-code-points.html';
var page = require('webpage').create();
var fs = require('fs');
var jsesc = require('jsesc');

var open = function(url, callback) {
	page.open(url, function(status) {
		if (status != 'success') {
			return phantom.exit();
		}
		callback();
	});
};

var writeJSON = function(fileName, data) {
	var contents = jsesc(data, {
		'json': true,
		'compact': false
	});
	fs.write(fileName, contents + '\n', 'w');
	console.log(fileName + ' created successfully.');
};

open(url, function() {
	var result = JSON.parse(page.evaluate(function() {

		// Modified version of `ucs2encode`; see https://mths.be/punycode
		var stringFromCharCode = String.fromCharCode;
		var codePointToSymbol = function(codePoint) {
			var output = '';
			if (codePoint > 0xFFFF) {
				codePoint -= 0x10000;
				output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
				codePoint = 0xDC00 | codePoint & 0x3FF;
			}
			output += stringFromCharCode(codePoint);
			return output;
		};

		var anchors = document.querySelectorAll('a[href^=" http://www.unicode.org/"]');
		var codePoints = [];
		var symbols = [];
		[].forEach.call(anchors, function(anchor) {
			var hex = anchor.textContent.trim().replace(/^U\+/, '');
			var codePoint = parseInt(hex, 16);
			codePoints.push(codePoint);
			symbols.push(codePointToSymbol(codePoint));
		});

		// Pass everything back to PhantomJS.
		return JSON.stringify({
			'codePoints': codePoints,
			'symbols': symbols
		});

	}));

	writeJSON('code-points.json', result.codePoints);
	writeJSON('symbols.json', result.symbols);

	phantom.exit();
});
