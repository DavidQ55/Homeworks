import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifGrid3 from './components/Challenge5'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifGrid3/>
  </StrictMode>,
)
