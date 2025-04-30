import { useState, useEffect } from "react"
import "./style.css"

function SidePanel() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Reduce loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        margin: 0,
        padding: 0
      }}>
      <div className="header-container">
        <h2>
          Connections Puzzle Pro
        </h2>
        <a 
          href="https://connectionspuzzlepro.org/" 
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          Visit Website
        </a>
      </div>
      
      {loading && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#f5f5f5",
          zIndex: 100
        }}>
          <p style={{ fontSize: "12px" }}>Loading...</p>
        </div>
      )}
      
      <iframe
        src="https://connectionspuzzlepro.org/"
        style={{
          width: "100%",
          height: "calc(100vh - 20px)",
          border: "none",
          overflow: "auto",
          flexGrow: 1,
          margin: 0,
          padding: 0,
          marginTop: "-1px" // Eliminate possible gaps
        }}
        frameBorder="0"
        scrolling="yes"
        allow="clipboard-write"
        title="Connections Puzzle Pro"
      />
    </div>
  )
}

export default SidePanel 