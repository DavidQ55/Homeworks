import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GifGrid} from './components/Challenge4-GifGrid'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifGrid category={category}/>
  </StrictMode>,
)
