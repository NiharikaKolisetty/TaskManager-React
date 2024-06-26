import { useEffect, useState } from "react"
import Logo from "../assets/Logo.png"
const Header = () => {
  const[theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme"))||"light");

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Task Manager Logo"></img>
            <span><b>Task Manager</b></span>
        </div>
        <div className="themeSelector">
            <span onClick={()=> setTheme("light")} className={theme==="light" ? "light activeTheme" : "light"}>Light</span>
            <span onClick={()=> setTheme("dark")} className={theme==="dark" ? "dark activeTheme" : "dark"}>Dark</span>
            <span onClick={()=> setTheme("gradient")} className={theme==="gradient" ? "gradient activeTheme" : "gradient"}>Gradient</span>
        </div>
    </header>
  )
}

export default Header
