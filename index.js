module.exports = {
  /**
   *  Check if an ad blocker is detected
   *  @return Boolean
   */
  isDetected: function(){
    var detected = false;

    // create the bait
    var bait = document.createElement('div');
		bait.setAttribute('class', 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links');
		bait.setAttribute('style', 'width: 1px ! important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;');
		window.document.body.appendChild(bait);

    // check if the bait has been affected by an adblocker
		if(window.document.body.getAttribute('abp') !== null
		|| bait.offsetParent === null
		|| bait.offsetHeight == 0
		|| bait.offsetLeft == 0
		|| bait.offsetTop == 0
		|| bait.offsetWidth == 0
		|| bait.clientHeight == 0
		|| bait.clientWidth == 0) {
			detected = true;
		} else if(window.getComputedStyle !== undefined) {
			var baitTemp = window.getComputedStyle(bait, null);
			if(baitTemp && (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden')) {
				detected = true;
			}
		}

    // destroy the bait
    window.document.body.removeChild(bait);

    return detected;
  }
};
