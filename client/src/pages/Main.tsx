import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Side from '../components/side/Side'
import TopBar from '../components/tap-bar/TopBar'
import Sections from './components/sections/Secions'
import './Main.scss'


const Main = () => {
  const [tab , setTab] = useState<number>(0)
  return (
    <main className='main-container'>
      <TopBar/>
      <Side setTab = {setTab} tab={tab}/>
      <Sections>
      <Outlet/>
      </Sections>
    </main>
  )
}

export default Main