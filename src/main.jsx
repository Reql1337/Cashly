import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { CashlyProvider } from './context/CashlyContext.jsx'
import App from './App.jsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <CashlyProvider>
        <App />
      </CashlyProvider>
    </HashRouter>
  </StrictMode>,
)
