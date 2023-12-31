import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import NavbarWithSearch from './components/Header/Header'
import CarouselDefault from './components/Carousel/Carousel'
import CardDefault from './components/Benefit/Benefit'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='absolute bottom-0 left-0'>
        <Sidebar />
      </div>
      <div className='absolute top-0 right-0'>
        <NavbarWithSearch />
      </div>
      <div className='absolute top-20 left-[300px]'>
        <CarouselDefault />
      </div>
      <div className='relative mt-60'>
        <CardDefault />
      </div>
    </>
  )
}

