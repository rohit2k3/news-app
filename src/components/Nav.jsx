import React from 'react'
import './CSS/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-container'>
        <nav className='nav'>
            <h1>News App</h1>
        </nav>
        <div className='nav-list'>
            <ul>
                <Link className='nav-links' to={'/'}>Home</Link>
                <Link className='nav-links' to={'/business'}>Business</Link>
                <Link className='nav-links' to={'/politics'}>Politics</Link>
                <Link className='nav-links' to={'/technology'} >Technology</Link>
                <Link className='nav-links' to={'/science'}>Science</Link>
                <Link className='nav-links' to={'/sports'}>Sports</Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav