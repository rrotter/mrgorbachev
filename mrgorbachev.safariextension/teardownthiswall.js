// mrgorbachev - a really lame nytimes paywall hack for Safari
// copyright Matthew Leon, 2012
"use strict";

// the scrap() function used by NYT in gwy.js counts
// paragraphs in articleBody elements, so we just rename
// these elements

var bodyElems = document.getElementsByClassName('articleBody');
while (bodyElems.length > 0) bodyElems[0].className = 'gorbachevArticleBody';

// for some reason we can invoke this function once and the popup will
// still be created
function hideOverlay() {
  var overlay = document.getElementById('overlay');
  var gatewayCreative = document.getElementById('gatewayCreative');
  if (overlay && gatewayCreative) {
    console.log('DESTROY');
    overlay.parentNode.removeChild(overlay);
    gatewayCreative.parentNode.removeChild(gatewayCreative);
  }
  setTimeout('hideOverlay();', 100);
}
hideOverlay();

//$(document.body).setStyle( { overflow:'scroll' } );
