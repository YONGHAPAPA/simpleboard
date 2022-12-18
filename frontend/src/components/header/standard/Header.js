import React from "react";

class Header extends React.Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none ">
                            <svg className="bi me-2" width="30" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#home"/></svg>
                        </a>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                        </ul>

                    </div>
                </nav>
                <div class="px-3 py-0 border-bottom mb-0"></div>
            </div>
        );
    }
}

export default Header;








    
      
    
    