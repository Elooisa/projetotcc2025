import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './App.jsx' // Importando MainApp como configuramos
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)