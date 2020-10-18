import { valueOutputToPromise } from './helpers.js'
import { wrapDeprecated } from './helpers.js'
import detectDomAdblocker from './detectDomAdblocker.js'
import detectAnyAdblocker from './detectAnyAdblocker.js'
import detectBraveShields from './detectBraveShields.js'
import detectOperaAdblocker from './detectOperaAdblocker.js'

export default {
  detectAnyAdblocker: detectAnyAdblocker,
  detectDomAdblocker: valueOutputToPromise(detectDomAdblocker),
  detectBraveShields: detectBraveShields,
  detectOperaAdblocker: detectOperaAdblocker,

  // deprecated :
  isDetected: wrapDeprecated(detectDomAdblocker, 'The `isDetected()` method is now deprecated, please use `detectAnyAdblocker()` instead, which returns a Promise and can detect more stuff (like Brave Shields).'),
}
