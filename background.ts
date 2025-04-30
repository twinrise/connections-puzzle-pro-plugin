export {}

// Setup sidebar
chrome.runtime.onInstalled.addListener(() => {
  // Register sidebar
  if (chrome.sidePanel) {
    chrome.sidePanel.setOptions({
      path: "sidepanel.html",
      enabled: true
    })
  }
})

// Handle browser action icon click
chrome.action.onClicked.addListener(() => {
  // 使用chrome.windows.getCurrent获取当前窗口ID
  chrome.windows.getCurrent((window) => {
    if (chrome.sidePanel && chrome.sidePanel.open && window.id) {
      chrome.sidePanel.open({ windowId: window.id })
    }
  })
})

// Ensure sidebar can be opened during initialization
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openSidePanel") {
    // 使用chrome.windows.getCurrent获取当前窗口ID
    chrome.windows.getCurrent((window) => {
      if (chrome.sidePanel && chrome.sidePanel.open && window.id) {
        chrome.sidePanel.open({ windowId: window.id })
        sendResponse({ success: true })
      } else {
        sendResponse({ success: false })
      }
    })
    return true
  }
})