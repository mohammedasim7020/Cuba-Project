import React from 'react'

import NavigationBar from './NavigationBar'
import SideBar from './SideBar'
import "./DashBoard.css"
const DashBorad = () => {
  return (
    <div class="grid-container">
    <div class="item1"><NavigationBar/></div>
    <div class="item2"><SideBar/></div>
    <div class="item3">Dashboard</div>  
  </div>
  )
}

export default DashBorad
