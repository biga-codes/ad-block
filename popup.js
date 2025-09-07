document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage('getBlockedCount', response => {
    document.getElementById('stats').textContent = `Blocking ${response.blocked} rules.`;
  });

  document.getElementById('toggle').addEventListener('click', () => {
    alert('Toggle not implemented yet.');
  });
});