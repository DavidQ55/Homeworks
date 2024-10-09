import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstApp from './components/Challenge2'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp />
  </StrictMode>,
)
