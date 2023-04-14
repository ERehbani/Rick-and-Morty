import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'


const Nav = ({ onSearch, handleLogOut }) => {




  return (
     <div className="nav">
       <div>
      <SearchBar onSearch={onSearch}/>
        <div className="nav-buttons">
          <Link to='/about' >ABOUT</Link>
          <Link to='/home' >HOME</Link>
          <Link to='/favorites' >FAVORITES</Link>
        </div>
        </div>

        <button onClick={handleLogOut}>LOG OUT</button>
     </div>
    )
  }

  export default Nav