
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { StockMarketRoutes } from '../stockMarket'

export const AppRouter = () => {
  return (
    <Routes>
        
        {/*Login and register route */}
        <Route path="/auth/*" element={<AuthRoutes/>}/>

        {/*stockMarket Route */}
        <Route path="/*" element={<StockMarketRoutes/>}/>



    </Routes>
  )
}