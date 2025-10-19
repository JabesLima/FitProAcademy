import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Global.css';
import Layote from './Layote.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layote />
  </StrictMode>,
)
