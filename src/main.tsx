import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Vite ciblera automatiquement App.tsx
import './index.css'

// On ajoute "as HTMLElement" pour indiquer à TypeScript que l'élément HTML existe bien
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)