import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/stylesheets/index.css'
import Header from './components/Header.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
