document.getElementById('changeColor').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tab = tabs[0];
    if (tab.url.startsWith('chrome://') || tab.url.startsWith('edge://')) {
      alert('Cannot execute script on chrome:// or edge:// pages.');
      return;
    }
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.body.style.backgroundColor = 'yellow';
      }
    });
  });
});
