import React, { useEffect, useState } from "react";
import "./Navbar.css"
function Navbar() {
const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
    },[])

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;

/* 
Zlatko Iliev
1 year ago
Hey guys, good tutorial, one suggestion about the Nav at 2:30:26 if you have padding in a container and want that to fit 100% without exceeding the width, you have to give the container "box-sizing: border-box;" simply add that to .nav in the css. */
