export {}

// 当用户点击扩展图标时
chrome.action.onClicked.addListener((tab) => {
  // 打开侧边栏
  if (chrome.sidePanel && chrome.sidePanel.open) {
    chrome.sidePanel.open({ tabId: tab.id })
  }
})