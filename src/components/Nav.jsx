import React from 'react'
import './CSS/Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
        <nav className='nav'>
            <h1>News App</h1>
        </nav>
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>Business</li>
                <li>Politics</li>
                <li>Technology</li>
                <li>Science</li>
                <li>Sports</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav