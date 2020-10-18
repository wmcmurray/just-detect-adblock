import { isOperaBrowser, createBaitRequest, doesBaitRequestIsBlockedByOpera } from './helpers.js'

/**
 * Standalone check to detect if opera adblocker seems to be activated
 * @return Promise
 */
export default function detectOperaAdblocker() {
  return new Promise(function(resolve, reject) {
    if(isOperaBrowser()) {
      createBaitRequest().then(function(xhttp) {
        resolve(doesBaitRequestIsBlockedByOpera(xhttp));
      });
    } else {
      resolve(false);
    }
  });
}
