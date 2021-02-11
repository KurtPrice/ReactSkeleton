import React from 'react'
import {Link} from'react-router-dom'

function NavigationMenu() {
  return(
    <span>
      <span className="font-bold"> The Menu </span>
        <ul>
            <li>
            <Link 
              to="/"
              className="text-blue-500"
              onClick={() => setShowMenu(false)}>
                App
            </Link>
            </li>
            <li>
            <Link
              to="/settings"
              className="text-blue-500"
              onClick={() => setShowMenu(false)}>
                Settings
            </Link>
            </li>
        </ul>
    </span>
  )
}

export default NavigationMenu