closeOtherTabs = function (word) {
  chrome.tabs.query(
    { currentWindow: true, active: false },
    function (tabs) {
      tabs.forEach(function (tab) {
        chrome.tabs.remove(tab.id);
      });
    })
};

chrome.contextMenus.create({
  title: "Close other tabs.",
  contexts: ["page"],
  onclick: closeOtherTabs
});