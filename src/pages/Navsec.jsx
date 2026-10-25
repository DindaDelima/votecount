import { useState } from 'react'
import logo from '../assets/kinderfield.png'
import '../styles/navbar.css'

export default function NavSec() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='navBar'>
            <img src={logo} height={80} width={80} alt="" />
            <a href="/" className='link'>About me</a>
            <a href="/" className='link'>My Projects</a>
            <div className='searchBar'>
              <input type="text" />
              <button className='searchBtn'>search</button>
            </div>
        </nav>
        
      </div>
        
    </>
  )
}


