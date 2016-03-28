# idn-allowed-code-points [![Build status](https://travis-ci.org/mathiasbynens/idn-allowed-code-points.svg?branch=master)](https://travis-ci.org/mathiasbynens/idn-allowed-code-points)

_idn-allowed-code-points_ contains data extracted from [the list of allowed IDN code points that Verisign uses by default](https://www.verisign.com/assets/allowedcode/idn-allowed-code-points.html). See [the Verisign SRS IDN registration rules](https://www.verisign.com/en_US/channel-resources/domain-registry-products/idn/idn-policy/registration-rules/index.xhtml) for more info.

This package enables an easy way of getting the list of all such symbols in string or code point format in your JavaScript build scripts.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install idn-allowed-code-points
```

In [Node.js](https://nodejs.org/):

```js
const codePoints = require('idn-allowed-code-points/code-points');
const symbols = require('idn-allowed-code-points/symbols');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_idn-allowed-code-points_ is available under the [MIT](https://mths.be/mit) license.
