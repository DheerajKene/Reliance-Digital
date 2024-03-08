import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContext } from './Componants/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext.Provider>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContext.Provider>
 
)
