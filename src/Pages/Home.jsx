import React from 'react'
import SideNavBar from '../Components/SideNavBar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <div>
        <SideNavBar/>
        <ToastContainer />
    </div>
  )
}
