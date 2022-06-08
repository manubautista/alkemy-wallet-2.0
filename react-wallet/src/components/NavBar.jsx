

const NavBar = () => {


    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/">
        <i class="fa-brands fa-atlassian"></i> Alkemy Wallet
        </a>

        <div>
        <ul class="navbar-nav ml-auto">
            
            <li>
            <a class="nav-link" href="/create" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
            New Operation
            </a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
}

export default NavBar