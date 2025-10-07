
import { Navigate, Route, Routes } from 'react-router-dom'

import { StockMarketPage, PredictionsPage, PricesPage} from '../pages'
import {ResponsiveAppBar} from '../../ui'


export const StockMarketRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />

      <div className="container">
        <Routes>
          <Route path="predictions" element={<PredictionsPage />} />
          <Route path="prices" element={<PricesPage />} />

          <Route path="/" element={<StockMarketPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}