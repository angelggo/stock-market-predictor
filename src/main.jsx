import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { StockMarketApp } from './StockMarketApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StockMarketApp />
  </StrictMode>,
)
