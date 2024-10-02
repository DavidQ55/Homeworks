import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CalculadoraApp from './CalculadoraApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculadoraApp />
  </StrictMode>,
)
