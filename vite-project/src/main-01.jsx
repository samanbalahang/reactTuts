import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import TheClassComponent from './components/TheClassComponent.jsx'
import TheFunctionalComponent from './components/TheFunctionalComponent.jsx'
import Thejsx from './components/jsx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TheClassComponent />
    <TheFunctionalComponent /> */}
    <Thejsx />
  </StrictMode>,
)
