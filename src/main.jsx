import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CashlyProvider } from './context/CashlyContext.jsx'
import App from './App.jsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CashlyProvider>
        <App />
      </CashlyProvider>
    </BrowserRouter>
  </StrictMode>,
)
