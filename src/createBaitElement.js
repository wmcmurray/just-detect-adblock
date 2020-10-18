/**
 * Create a DOM element that should be seen as an ad by adblockers
 * @return DOM element
 */
export default function createBaitElement(){
  var bait = document.createElement('div');

  bait.setAttribute('class', 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner');
  bait.setAttribute('style', 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;');

  return bait;
};
