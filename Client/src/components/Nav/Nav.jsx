import SearchBar from '../SearchBar/SearchBar';
import { Link, NavLink } from 'react-router-dom'


const Nav = ({ onSearch, handleLogOut }) => {




  return (
     <div className="nav">
      <div>
      <SearchBar onSearch={onSearch}/>
        <div className="nav-buttons">
          <NavLink to={'/about'}>
            ABOUT
          </NavLink>
          <NavLink to={'/home'}>
            HOME
          </NavLink>
          <NavLink to={'/favorites'}>
            FAVORITES
          </NavLink>
        </div>
      </div>

        <button onClick={handleLogOut}>LOG OUT</button>
     </div>
    )
  }

  export default Nav