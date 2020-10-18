/**
 * Check if a DOM element seems to be blocked by an adblocker or not
 * @return Boolean
 */
export default function doesElementIsBlocked(elem){
  if(elem.offsetParent === null
  || elem.offsetHeight == 0
  || elem.offsetLeft == 0
  || elem.offsetTop == 0
  || elem.offsetWidth == 0
  || elem.clientHeight == 0
  || elem.clientWidth == 0) {
    return true;
  } else if(window.getComputedStyle !== undefined) {
    var elemCS = window.getComputedStyle(elem, null);
    if(elemCS && (elemCS.getPropertyValue('display') == 'none' || elemCS.getPropertyValue('visibility') == 'hidden')) {
      return true;
    }
  }

  return false;
};
