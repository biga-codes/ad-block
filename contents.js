
const adSelectors = [
  '[id^="ad-"]',
  '[class*="ad-"]',
  '[class*="ads"]',
  'iframe[src*="ads"]'
];

function hideAds() {
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
  });
}

hideAds();
//we can call the function again if ads are displayed after loading through any of its descendant pages
const observer = new MutationObserver(hideAds);
observer.observe(document.body, { childList: true, subtree: true });