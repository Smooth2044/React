// Importaciones de React y ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importa el componente principal 'App' y los estilos
import App from './App2'
import './index.css'

ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)