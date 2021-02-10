import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import{
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  const menuTransitions = useTransition(showMenu, null, {
      from: { opacity: 0, transform: 'translateX(-100%)'},
      enter: {opacity: 1, transform: 'translateX(0%)'},
      leave: {opacity: 0, transform: 'translateX(-100%)'},
  })

  const maskTransitions = useTransition(showMenu, null, {
      from: { position: 'absolute', opacity: 0  },
      enter: { opacity: 1  },
      leave: { opacity: 0  },

  })

  //className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

  return(
    <nav>
      <span className="text-xl">
          <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowMenu(!showMenu)}
          />
      </span>
      {
        maskTransitions.map(({ item, key, props }) =>
        item &&
        <animated.div
            key={key}
            style={props}
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setShowMenu(false)}>
        </animated.div>
        )
      }

      {
        menuTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div 
            key={key}
            style={props}
            className="fixed bg-white top-0 left-0 w-3/4 h-full z-50 shadow p-5">
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
        </animated.div>
        )
      }

    </nav>
)
}

export default Navigation
