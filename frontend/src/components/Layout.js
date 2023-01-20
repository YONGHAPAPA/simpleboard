import * as React from 'react'
import { Outlet } from 'react-router-dom';
import BoardSideNav from './BoardSideNav';
import Footer from './Footer';
import Header from './Header';


function Layout(){

    return(
        <>
            <div>
                <Header/>
            </div>
                <BoardSideNav/>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}


export default Layout;
