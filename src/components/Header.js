import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          Presión Arterial
        </Link>

        <div className="ml-auto">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/measure/new'} className="btn btn-secondary rounded-0">
                Nueva Medida
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;