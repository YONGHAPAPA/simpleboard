import * as React from "react";
import { Form, Link } from "react-router-dom"

class Header extends React.Component {

    render(){
        return(
            <div className="main-header">
                <button><Link to="/">HOME</Link></button>&nbsp;
                <button><Link to="/board">BOARD</Link></button>&nbsp;
                <button><Link to="/login">LOGIN</Link></button>&nbsp;
                <button><Link to="/about">ABOUT</Link></button>
            </div>
        );
    }
}

export default Header;
