import "../index.css"
const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
        <div className="nav-logo container-item">
            <div>Logo</div>
            <div className="nav-cross">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>
        <div className="nav-menu container-item">
            <a className="menu-item" href="#home">Home</a>
            <a className="menu-item" href="#work">How it works</a>
            <a className="menu-item" href="#features">Features</a>
            <a className="menu-item" href="#price">Pricing</a>
            <a className="menu-item" href="#createaccount">Create Account</a>
        </div>
    </div>
    </>
  )
}

export default Navbar