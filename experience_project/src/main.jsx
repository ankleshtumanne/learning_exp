import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './AuthContext/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <AuthProvider>
         <React.StrictMode>
             <App />
        </React.StrictMode>
     </AuthProvider>
    
  </BrowserRouter>
 
)
