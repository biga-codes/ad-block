const blocked_domains = [
  "*://*.doubleclick.net/*",
  "*://*.adservice.google.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.adsafeprotected.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: blocked_domains },
  ["blocking"]
);