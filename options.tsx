import { useState, useEffect } from "react"

function OptionsPage() {
  const [autoOpenLatest, setAutoOpenLatest] = useState(true)

  useEffect(() => {
    // Load saved settings
    chrome.storage.sync.get(["autoOpenLatest"], (result) => {
      if (result.autoOpenLatest !== undefined) {
        setAutoOpenLatest(result.autoOpenLatest)
      }
    })
  }, [])

  const saveOptions = () => {
    chrome.storage.sync.set({ autoOpenLatest })
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
      <h1>Connections Puzzle Pro - Settings</h1>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            checked={autoOpenLatest}
            onChange={(e) => setAutoOpenLatest(e.target.checked)}
          />
          <span>Automatically open latest puzzle at startup</span>
        </label>
      </div>
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#4285f4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={saveOptions}>
        Save Settings
      </button>
    </div>
  )
}

export default OptionsPage