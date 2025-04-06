import { faRightToBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Navbar.style.css';

const Navbar = () => {
    const menus = [
        'WOMAN',
        'MAN',
        'KIDS',
        'HOME',
        'BEAUTY'
    ]
  return (
    <div>
        <div className='login-area'>
            <FontAwesomeIcon icon={faRightToBracket} />
             LOG IN
        </div>
        <div className='logo-area'>
            <img width={150} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png'/>
        </div>
        <div className='nav-area'>
            <ul>
                {menus.map((item)=>(
                 <li>{item}</li>   
                ))}
            </ul>
            <div className='search-area'>
                <input type="text"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    </div>
  )
}

export default Navbar