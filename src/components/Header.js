import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import websiteicon from '../assets/images/websiteicon.png'


const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Vedam</strong> <span>Foundation</span></Link>
        <Link to="/generic" >
                    </Link>   
              <img  src={websiteicon} alt="" />
            
                         <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
