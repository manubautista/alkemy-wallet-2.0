

const NavBar = () => {


    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">

            <a className="navbar-brand" href="/">
            <i className="fa-brands fa-atlassian"></i> Alkemy Wallet
            </a>

            <div>
                
                <a className="btn btn-success btn-lg" href="/create" id="navbarDropdown">
                <i className="fa-solid fa-plus"></i> New Operation
                </a>
                
            </div>
        </div>
    </nav>
    )
}

export default NavBar