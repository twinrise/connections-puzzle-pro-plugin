export default {
  manifest: {
    web_accessible_resources: [
      {
        resources: ["assets/*"],
        matches: ["<all_urls>"]
      }
    ],
    content_security_policy: {
      extension_pages: "default-src 'self'; frame-src https://connectionspuzzlepro.org/; connect-src https://connectionspuzzlepro.org/;"
    },
    side_panel: {
      default_path: "sidepanel.html",
      default_width: 480
    }
  },
  features: {
    sidepanel: true
  }
} 