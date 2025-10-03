import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { StockMarketApp } from './StockMarketApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StockMarketApp />
    </BrowserRouter>
  </StrictMode>,
)
