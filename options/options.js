document.getElementById('save').addEventListener('click', () => {
  const rules = document.getElementById('customRules').value.split('\n');
  chrome.storage.sync.set({ customRules: rules }, () => {
    alert('Custom rules saved!');
  });
});

window.onload = () => {
  chrome.storage.sync.get('customRules', data => {
    if (data.customRules) {
      document.getElementById('customRules').value = data.customRules.join('\n');
    }
  });
};