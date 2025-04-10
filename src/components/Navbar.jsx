import { faRightToBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import './Navbar.style.css';
import { useNavigate } from 'react-router';
import { faUser,faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({authenticate, setAuthenticate}) => {
    let [width,setWidth]=useState(0)
    const navigate = useNavigate()
    const sidebarRef = useRef()

    useEffect(()=>{
        const handleOutsideClick = (event)=>{
            if (width>0 && sidebarRef.current && !sidebarRef.current.contains(event.target)){
                setWidth(0)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        };

    },[width])

    const toLogin=()=>{
        if (authenticate === false){
            navigate('/login')
        } else {
            if (window.confirm("로그아웃 하시겠습니까?")){
                alert("로그아웃 되었습니다.")
                setAuthenticate(false)
                navigate('/')
            } 
        }
    }

    const search=(event)=>{
        if(event.key==="Enter"){
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }
    }

    const menus = [
        'WOMAN',
        'MAN',
        'KIDS',
        'HOME',
        'BEAUTY'
    ]
  return (
    <div>
        <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className="side-menu" ref={sidebarRef} style={{ width: width }}>
            <button className="closebtn" onClick={() => setWidth(0)}>
                &times;
            </button>

            <div className="side-search-area">
                <FontAwesomeIcon icon={faSearch} />
                <input
                type="text"
                placeholder="검색"
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                    navigate(`/?q=${event.target.value}`);
                    setWidth(0); // 검색 후 메뉴 닫기
                    }
                }}
                />
            </div>

            <div className="side-menu-list">
                {menus.map((menu, index) => (
                <p key={index}>{menu}</p>
                ))}
            </div>

            <div className="side-login-button" onClick={() => {
                if (authenticate) {
                    if (window.confirm("로그아웃 하시겠습니까?")){
                        alert("로그아웃 되었습니다.")
                        setAuthenticate(false)
                        localStorage.removeItem("auth");
                        navigate('/')
                    } 
                } else {
                navigate("/login");
                }
                setWidth(0);
            }}>
                <FontAwesomeIcon icon={faUser} />
                <span>{authenticate ? "LOG OUT" : "LOG IN"}</span>
            </div>
        </div>

        <div className='login-area' onClick={toLogin}>
            <FontAwesomeIcon icon={faRightToBracket} />
            {authenticate?"LOG OUT":"LOG IN"}
        </div>
        <div className='logo-area' onClick={()=>{navigate('/')}}>
            <img width={150} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png'/>
        </div>
        <div className='nav-area'>
            <ul>
                {menus.map((item)=>(
                 <li>{item}</li>   
                ))}
            </ul>
            <div className='search-area'>
                <input 
                    placeholder='SEARCH'
                    type="text" 
                    onKeyDown={(event)=> {
                        if (event.key === "Enter"){
                            const keyword = event.target.value.trim();
                            if (keyword===""){
                                alert("검색어를 입력해주세요")
                                return
                            } search(event)
                        }
                    } }/>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    </div>
  )
}

export default Navbar