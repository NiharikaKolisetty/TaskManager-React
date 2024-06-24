import Logo from "../assets/Logo.png"
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Task Manager Logo"></img>
            <span><b>Task Manager</b></span>
        </div>
        <div className="themeSelector">
            <span className="light">Light</span>
            <span className="dark">Dark</span>
            <span className="gradient">Gradient</span>
        </div>
    </header>
  )
}

export default Header
