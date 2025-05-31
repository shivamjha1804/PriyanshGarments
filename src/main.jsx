import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Optional: Hide React DevTools suggestion in production
// if (process.env.NODE_ENV === 'production') {
//   console.warn = () => {};
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)