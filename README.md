# just-detect-adblock
This package was strongly ~~inspired~~ copied from [BlockAdBlock](https://github.com/sitexw/BlockAdBlock) & [FuckAdBlock](https://github.com/sitexw/FuckAdBlock) then I added features that those don't have. I just didn't like how overly complicated their API was, so I made this, which contains only helper functions that can be called manually. The rest is up to you !


## Features

- can detect adblocking browser extensions (like **Adblock Plus**)
- can detect **Brave browser** shields
- can detect **Opera browser** adblocker


## Installation
```
npm install just-detect-adblock --save
```


## API

* `detectAnyAdblocker()` *Return Promise(detected = true/false)*, performs all available checks below until at least one is positive
* `detectDomAdblocker()` *Return Promise(detected = true/false)*, detect if a browser extension is hiding ads from the DOM
* `detectBraveShields()` *Return Promise(detected = true/false)*, detect if Brave browser shields seems to be activated
* `detectOperaAdblocker()` *Return Promise(detected = true/false)*, detect if Opera browser adblocker seems to be activated
* **Deprecated :**
* `isDetected()` *Return true/false*, if an adblocker is detected **(old behavior only, this method does not detect Brave or Opera adblockers, please use `detectAnyAdblocker` instead)**.


## Exemples

### Webpack
```javascript
import { detectAnyAdblocker } from 'just-detect-adblock'

detectAnyAdblocker().then((detected) => {
  if(detected){
    // an adblocker is detected
  }
});
```

### Web browser
```html
<script type="text/javascript" src="/dist/bundle.umd.js"></script>

<script type="text/javascript">
  justDetectAdblock.detectAnyAdblocker().then(function(detected) {
    if(detected){
      // an adblocker is detected
    }
  });
</script>
```
