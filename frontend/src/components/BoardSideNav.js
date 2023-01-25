import React from 'react';
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PostList from './BoardPostList';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib'
import { SidebarData } from './SiderbarData';
import SubMenu from './SubMenu'
import { RiContactsBookLine } from 'react-icons/ri';


const Nav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const NavIcon = styled(Link)`
    margin-left:2rem;
    font-size:2rem;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center
`;

const SidebarNav = styled.nav`
    background: gray;
    width: 190px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    //top: 0;

`;

const SidebarWrap = styled.div`
    width:100%;
`;


const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>

                {/* <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </NavIcon>
                </Nav> */}

            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    {/* <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon> */}

                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>

            </IconContext.Provider>
        </>
    );

}


// function getBoardInfo(){


//     return "";
// }


function getAllBoard(){

    fetch("board/getBoardList").then(res=>{

        console.log("getAllBoard")
        console.log(res.json());

    }).catch(err=>{

        console.log("ERR !!!! ")
        console.log(err);
    })

}


class BoardSideNav extends React.Component {

    


    render(){

        let boardInfo = getAllBoard();

        return(
                
            <div className='sidebar' >
                <SideBar/>
            </div>
        );
    }
}

export default BoardSideNav;