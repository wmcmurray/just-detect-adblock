# just-detect-adblock
This package is strongly ~~inspired~~ copied from [BlockAdBlock](https://github.com/sitexw/BlockAdBlock) & [FuckAdBlock](https://github.com/sitexw/FuckAdBlock). I just didn't liked how overly complicated the end user API was so I made this, which contains only one function to detect if an adblocker is active or not.

## Installation
```
npm install just-detect-adblock --save
```

## API

* `isDetected()` Returns true/false if an adblocker is detected.


## Exemples

### Webpack
```javascript
import adBlocker from 'just-detect-adblock'

if(adBlocker.isDetected()){
  // an adblocker is detected
}
```
