import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <Link to='/'><h1>Blog</h1></Link>
            <nav>
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/create"><h4>Create Blog</h4></Link>
            </nav>
        </div>
    </>
  )
}

export default Navbar