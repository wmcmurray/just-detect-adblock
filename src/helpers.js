/**
 * Take a function that normally return a primitive value (ex: Boolean)
 * and return a function that return a Promise instead
 */
export function valueOutputToPromise(func) {
  return function() {
    var args = arguments;
    return new Promise(function(resolve, reject) {
      var result = func.apply(this, args);
      resolve(result);
    });
  };
}

/**
 * Wraps a function so it indicate that it is deprecated
 */
export function wrapDeprecated(func, message){
  return function() {
    console.warn('just-detect-adblock : ' + (message || 'This method is deprecated.'));
    return func.apply(this, arguments);
  };
};

/**
 * Check if Brave is the current browser
 * @return Boolean
 */
export function isBraveBrowser(){
  return typeof navigator.brave !== 'undefined' && typeof navigator.brave.isBrave !== 'undefined';
};

/**
 * Check if Opera is the current browser
 * @return Boolean
 */
export function isOperaBrowser(){
  return typeof navigator.userAgent === 'string' && navigator.userAgent.match(/Opera|OPR\//);
};

/**
 * Create a DOM element that should be seen as an ad by adblockers
 * @return DOM element
 */
export function createBaitElement(){
  var bait = document.createElement('div');

  bait.setAttribute('class', 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner');
  bait.setAttribute('style', 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;');

  return bait;
};

/**
 * Check if a DOM element seems to be blocked by an adblocker or not
 * @return Boolean
 */
export function doesElementIsBlocked(elem){
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

/**
 * Create and execute an XMLHttpRequest that should be blocked by an adblocker
 * @return Promise
 */
export function createBaitRequest() {
  return new Promise(function(resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState == 4) {
        resolve(xhttp);
      }
    };

    // let's hope github is okay with me fetching a file on their server like that :)
    // NOTE : it will generate traffic only when brave shields are off tho,
    // because the request is not actually sent when the url is being blocked
    xhttp.open('GET', 'https://raw.githubusercontent.com/wmcmurray/just-detect-adblock/master/baits/pagead2.googlesyndication.com', true);
    xhttp.send();
  });
}

// NOTE : brave seems to let blocked requests return a valid HTTP status code,
// but the content returned is empty, so we check if we see the content that we know is in our bait file
export function doesBaitRequestIsBlockedByBrave(xhttp) {
  return xhttp.status === 200 && !xhttp.responseText.match(/^thistextshouldbethere(\n|)$/);
}

// NOTE : opera seems to set the HTTP status code to 0
// and empty content, so we check if we see the content that we know is in our bait file
export function doesBaitRequestIsBlockedByOpera(xhttp) {
  return xhttp.status === 0 && !xhttp.responseText.match(/^thistextshouldbethere(\n|)$/);
}
