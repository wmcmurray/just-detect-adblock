import { isBraveBrowser, createBaitRequest, doesBaitRequestIsBlockedByBrave } from './helpers.js'

/**
 * Standalone check to detect if brave browser shields seems to be activated
 * @return Promise
 */
export default function detectBraveShields() {
  return new Promise(function(resolve, reject) {
    if(isBraveBrowser()) {
      createBaitRequest().then(function(xhttp) {
        resolve(doesBaitRequestIsBlockedByBrave(xhttp));
      });
    } else {
      resolve(false);
    }
  });
}
