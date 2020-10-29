# just-detect-adblock :no_entry_sign: :detective:

[![npm](https://img.shields.io/npm/v/just-detect-adblock)](https://www.npmjs.com/package/just-detect-adblock)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wmcmurray/just-detect-adblock.svg?logo=lgtm&logoWidth=18&label=JS%20code%20quality)](https://lgtm.com/projects/g/wmcmurray/just-detect-adblock/context:javascript)

[![live demo](https://img.shields.io/badge/-live%20demo%20!-springgreen?style=for-the-badge)](https://wmcmurray.github.io/just-detect-adblock/)

This package was originally ~~inspired~~ copied from [BlockAdBlock](https://github.com/sitexw/BlockAdBlock) & [FuckAdBlock](https://github.com/sitexw/FuckAdBlock), then I added features that those don't have. I just didn't like how overly complicated their API was, so I made this, which contains only helper functions that can be called manually. The rest is up to you !


## Features

- **Browser extensions** detection (like **AdBlock, Adblock Plus, uBlock, etc.**)
- **Brave browser** shields detection
- **Opera browser** adblocker detection

<br>


## How to use

```
npm install just-detect-adblock --save
```

| Methods                       | Return                          | Description                                                        |
| :---------------------------- | :------------------------------ | :------------------------------------------------------------------|
| `detectAnyAdblocker()`        | *Promise(detected=true/false)*  | perform all available checks below until at least one is positive  |
| `detectDomAdblocker()`        | *Promise(detected=true/false)*  | detect if a browser extension is hiding ads from the DOM           |
| `detectBraveShields()`        | *Promise(detected=true/false)*  | detect if Brave browser shields seems to be activated              |
| `detectOperaAdblocker()`      | *Promise(detected=true/false)*  | detect if Opera browser adblocker seems to be activated            |
| **DEPRECATED** `isDetected()` | *true/false*                    | if an adblocker is detected **(old behavior only, this method does not detect Brave or Opera adblockers, please use `detectAnyAdblocker` instead)** |

<br>

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

### Browser
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
