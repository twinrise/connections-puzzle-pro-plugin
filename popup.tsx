import { useEffect } from "react"

function IndexPopup() {
  useEffect(() => {
    // 当弹出窗口打开时，发送消息给后台脚本，请求打开侧边栏
    chrome.runtime.sendMessage({ action: "openSidePanel" })

    // 然后立即关闭弹出窗口
    window.close()
  }, [])

  return null
}

export default IndexPopup
