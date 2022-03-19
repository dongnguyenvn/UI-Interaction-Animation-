import './style/_app.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='product' element={<ProductPage />}>
                    <Route path=':productId' element={<ProductDetailPage />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
