

const NavBar = () => {


    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container">

            <a class="navbar-brand" href="/">
            <i class="fa-brands fa-atlassian"></i> Alkemy Wallet
            </a>

            <div>
                
                <a className="btn btn-success btn-lg" href="/create" id="navbarDropdown">
                <i class="fa-solid fa-plus"></i> New Operation
                </a>
                
            </div>
        </div>
    </nav>
    )
}

export default NavBar