
import { Navigate, Route, Routes } from 'react-router-dom'
import { StockMarketPage } from '../pages'
import {ResponsiveAppBar} from '../../ui'

export const StockMarketRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<StockMarketPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}