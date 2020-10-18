import { createBaitElement, doesElementIsBlocked } from './helpers.js'

/**
 * Detect if an ad blocker is blocking ads in the DOM itself
 * @return Boolean
 */
export default function detectDomAdblocker(){
  // that's a legacy Ad Block Plus check I suppose ?
  // I don't think this attribute is set anymore, but I am keeping it anyway
  if(window.document.body.getAttribute('abp') !== null) {
    return true;
  }

  // try to lure adblockers into a trap
  var bait = createBaitElement();
  window.document.body.appendChild(bait);
  var detected = doesElementIsBlocked(bait);
  window.document.body.removeChild(bait);

  return detected;
};
