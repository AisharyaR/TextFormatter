import React from 'react'
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
      <nav className="navbar navbar-expand" style={{backgroundColor: '#444141'}}>
        {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color: 'white'}} to="/">{props.title}</Link>
          {/* <a className="navbar-brand" style={{color: 'white'}} href="#">{props.title}</a> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color: 'white'}}>Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" style={{color: 'white'}}>{props.about}</Link>
                {/* <a className="nav-link" href="/aboutus" style={{color: 'white'}}>{props.about}</a> */}
              </li>
              <li>
                <Link className="nav-link" to="/disabled" style={{color: 'white'}}>Typing master</Link>
                {/* <a className="nav-link" href="/disabled" style={{color: 'white'}}>Typing master</a> */}
              </li>
            </ul>
            
            <form className="d-flex" role="search">
              {/* <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success mx-3" type="submit">Search</button> */}
              
              <div className="form-check form-switch">
                {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/> */}
                {/* <label className={`form-check-label text-bg-${props.mode}`} htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label> */}

                <button type="button" class="btn btn-primary" onClick={props.toggleBlueMode} id="BlueSwitch">Enable Blue Mode</button>
                <button type="button" class="btn btn-success mx-3" onClick={props.toggleGreenMode} id="GreenSwitch">Enable Green Mode</button>
                <button type="button" class="btn btn-danger" onClick={props.toggleRedMode} id="RedSwitch">Enable Red Mode</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About us here (write)'
};