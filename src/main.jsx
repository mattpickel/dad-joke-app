import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// When embedded in an iframe, report content height to the parent so the host
// page can resize the iframe to fit. Host listens for { type: 'dadjokes:height', height }.
if (window.self !== window.top) {
  document.documentElement.classList.add('embedded')

  let lastHeight = 0
  const postHeight = () => {
    const h = document.documentElement.scrollHeight
    if (h !== lastHeight) {
      lastHeight = h
      window.parent.postMessage({ type: 'dadjokes:height', height: h }, '*')
    }
  }

  const ro = new ResizeObserver(postHeight)
  ro.observe(document.documentElement)
  window.addEventListener('load', postHeight)
}
