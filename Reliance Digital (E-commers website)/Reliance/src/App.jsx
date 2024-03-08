import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import{Routes, Route} from 'react-router-dom'
import './App.css'
import DropdownToggle from './Componants/DropdownToggle/DropdownToggle'
import Adv_Slider from './Componants/Adv_Slider/Adv_Slider'
import Advertisment from './Componants/Advertisement/Advertisement'
import Products from './Componants/Products/Products'
import TopDeals from './Componants/TopDeals/TopDeals'
import AllRoutes from './Componants/Allroutes'
import Pages from './Componants/Pages'
import React from 'react'



function App() {
  

  return (
    <div>
      
      <AllRoutes/>
      <Pages/>
      
    </div>
  )
}

export default App
