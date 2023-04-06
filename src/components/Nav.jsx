import React from 'react'
import SearchBar from './SearchBar'
import { Link, useLocation } from 'react-router-dom'

const Nav = (props) => {

  const location = useLocation();
  const { pathname } = location;
  const renderNav = pathname !== '/';

  return (
    <nav className='navbar'> 
        { renderNav && ( 
        <> 
        <SearchBar onSearch={props.onSearch}/>
        <button className="btn-nav"> <Link to='about'> About  </Link></button>
        <button className="btn-nav"> <Link to='home'> Home </Link> </button> 
        </> ) }
    </nav>
  )
}

export default Nav