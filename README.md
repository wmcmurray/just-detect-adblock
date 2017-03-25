# just-detect-adblock
This package is strongly ~~inspired~~copied from [BlockAdBlock](https://github.com/sitexw/BlockAdBlock). I just didn't liked how overly complicated the end user API was. I just needed a simple function to detect if an adblocker is present or not. So i made this !

## Installation
```
npm install just-detect-adblock --save
```

## API

* `isDetected()` Returns true or false if an adblocker is detected.


## Exemples

### Webpack
```javascript
import adBlocker from 'just-detect-adblock'

if(adBlocker.isDetected()){
  // an adblocker is detected
}
```
