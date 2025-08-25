import { Route, BrowserRouter, Routes as RouterRoutes } from 'react-router-dom'
import App from '../App'

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<App />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes