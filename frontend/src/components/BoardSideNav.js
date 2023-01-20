import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import PostList from './BoardPostList';




class BoardSideNav extends React.Component {

    render(){
        return(
                
            <div className='main-body' >
                SideBar
            </div>
        );
    }
}

export default BoardSideNav;