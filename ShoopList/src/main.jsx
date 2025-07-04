import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import CartPage from './pages/CartPage.jsx'
import NavPage from './pages/NavPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './pages/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <NavPage />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
)
