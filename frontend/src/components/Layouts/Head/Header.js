import * as React from "react";
import {Form} from "react-router-dom"

class Header extends React.Component {

    render(){

        return(
            <div className="main-header">
                <button>HOME</button>&nbsp;
                <button>LOGIN</button>&nbsp;
                <button>ABOUT</button>
            </div>
        );
    }
}

export default Header;
