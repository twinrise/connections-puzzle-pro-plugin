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
  
  // Add context menu item
  chrome.contextMenus.create({
    id: "openConnectionsPuzzle",
    title: "Open Connections Puzzle Pro in sidebar",
    contexts: ["all"]
  })
})

// Handle browser action icon click
chrome.action.onClicked.addListener((tab) => {
  if (tab?.id && chrome.sidePanel && chrome.sidePanel.open) {
    chrome.sidePanel.open({ tabId: tab.id })
  }
})

// Handle context menu click events
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openConnectionsPuzzle" && tab?.id) {
    if (chrome.sidePanel && chrome.sidePanel.open) {
      chrome.sidePanel.open({ tabId: tab.id })
    }
  }
})

// Ensure sidebar can be opened during initialization
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openSidePanel" && sender.tab?.id) {
    if (chrome.sidePanel && chrome.sidePanel.open) {
      chrome.sidePanel.open({ tabId: sender.tab.id })
      sendResponse({ success: true })
    } else {
      sendResponse({ success: false })
    }
    return true
  }
})