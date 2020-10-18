import { isOperaBrowser, isBraveBrowser, createBaitRequest, doesBaitRequestIsBlockedByOpera, doesBaitRequestIsBlockedByBrave } from './helpers.js'
import detectDomAdblocker from './detectDomAdblocker.js'

/**
 * Detect if any known ad blocker mechanism is detected
 * @return Promise
 */
export default function detectAnyAdblocker(){
  return new Promise(function(resolve, reject) {
    // check dom adblockers first
    if(detectDomAdblocker()) {
      return resolve(true);
    }

    // then check request adblockers (using only one request for all)
    if(isBraveBrowser() || isOperaBrowser()) {
      createBaitRequest().then(function(xhttp) {
        // brave
        if(isBraveBrowser()) {
          return resolve( doesBaitRequestIsBlockedByBrave(xhttp) );
        }
        // opera
        if(isOperaBrowser()) {
          return resolve( doesBaitRequestIsBlockedByOpera(xhttp) );
        }

        resolve(false);
      });
    } else {
      resolve(false);
    }
  });
};
