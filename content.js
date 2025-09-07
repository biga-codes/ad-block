const blocked_domains = [
  "*://*.doubleclick.net/*",
  "*://*.adservice.google.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.adsafeprotected.com/*",
    "*://audio-ec.spotify.com/*",
  "*://spclient.wg.spotify.com/adlogic/*",
  "*://spclient.wg.spotify.com/ads/*",
  "*://*.ads.spotify.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: blocked_domains },
  ["blocking"]
);