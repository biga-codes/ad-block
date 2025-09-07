let rules = [];
let customRules = [];

function fetchRules() {
  fetch(chrome.runtime.getURL('rules/easylist.txt'))
    .then(response => response.text())
    .then(text => {
      rules = text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('!'));
    });
}

function updateCustomRules() {
  chrome.storage.sync.get('customRules', data => {
    customRules = Array.isArray(data.customRules) ? data.customRules : [];
  });
}

fetchRules();
updateCustomRules();
chrome.storage.onChanged.addListener(updateCustomRules);

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    const allRules = rules.concat(customRules);
    return { cancel: allRules.some(rule => url.includes(rule.replace('||', '').replace('^', ''))) };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg === 'getBlockedCount') {
    sendResponse({ blocked: rules.length + customRules.length });
  }
});