import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://connectionspuzzlepro.org/*"],
  all_frames: true
}

// Adjust scaling when content loads
window.addEventListener("load", () => {
  // If running inside an iframe
  if (window.parent !== window) {
    // Set appropriate viewport
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.head.appendChild(meta)
    
    // Set page scaling - use stronger vertical scaling
    document.body.style.transform = "scale(0.75)"
    document.body.style.transformOrigin = "top center"
    document.body.style.overflow = "auto"
    
    // Add styles to make the page more suitable for sidebars - focus on vertical compactness
    const style = document.createElement("style")
    style.textContent = `
      body {
        margin: 0 !important;
        padding: 0 !important;
        overflow: auto !important;
        height: auto !important;
      }
      
      /* Style scrollbars */
      ::-webkit-scrollbar {
        width: 5px !important;
        height: 5px !important;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2) !important;
        border-radius: 5px !important;
      }
      
      /* Remove any margins or padding that might require scrolling */
      .game-container, .game-board, .main-container {
        padding: 0 !important;
        margin: 0 !important;
        max-height: none !important;
        min-height: auto !important;
      }
      
      /* Greatly reduce vertical spacing */
      .header, .header-content, nav, .navigation {
        padding: 2px 0 !important;
        margin: 0 !important;
        min-height: auto !important;
        max-height: 30px !important;
      }
      
      /* Reduce the size of headings and other unnecessary elements */
      h1, h2, h3, h4, .header {
        font-size: 90% !important;
        margin: 0 !important;
        padding: 1px !important;
        line-height: 1.2 !important;
      }
      
      /* Reduce all vertical spacing */
      * {
        margin-top: 1px !important;
        margin-bottom: 1px !important;
        padding-top: 1px !important;
        padding-bottom: 1px !important;
      }
      
      /* Ensure game area is fully visible */
      .board, .game, .grid {
        transform: scale(0.9);
        transform-origin: top center;
      }
    `
    document.head.appendChild(style)
    
    // Monitor content changes to ensure our styles always take effect
    const observer = new MutationObserver(() => {
      document.body.style.transform = "scale(0.75)"
      document.body.style.transformOrigin = "top center"
      document.body.style.overflow = "auto"
    })
    
    observer.observe(document.body, { childList: true, subtree: true })
    
    // Additional operations: Try to remove unnecessary elements after content loads (like ads, footers, etc.)
    setTimeout(() => {
      // Try to find and remove unnecessary elements
      ['footer', '.footer', '.ad', '.advertisement', '.banner', '.info-section', '.sidebar']
        .forEach(selector => {
          const elements = document.querySelectorAll(selector)
          elements.forEach(el => {
            if (el.parentNode) {
              el.parentNode.removeChild(el)
            }
          })
        })
    }, 2000)
  }
}) 