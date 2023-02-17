import React, { Suspense, useEffect } from 'react';
import { useState, useDeferredValue } from 'react'
import { Outlet } from 'react-router-dom';
//import PostList from './BoardPostList';
import styled, { keyframes } from 'styled-components';
import { Link, useLoaderData } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib'

import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';



import { SidebarData } from '../../SiderbarData';

import SideBoardNavItem from './SideBoardNavItem';
import { RiContactsBookLine } from 'react-icons/ri';
import type { IBoard } from 'src/components/Models/boards';


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

const spinnerRotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(1080deg);
    }
`

const Spinner = styled(ImIcons.ImSpinner2)`
    color:teal;
    font-size: 0.7rem;
    animation: ${spinnerRotate} 3s infinite;
`;



export interface IBoardNavItem {
    id: Number, 
    boardName: String, 
    boardType: String, 
    parentBoard: Number, 
    description: String, 
    seq: Number, 
    level: Number, 
    idPath: String, 
    boardPath: String
}


function convertBoardsForNav(boards: IBoard[]) : any {
    //let navItem: IBoardNavItem;
    let navItems :IBoardNavItem[] = Array<IBoardNavItem>();

    boards.forEach((item)=>{
        const navItem: IBoardNavItem = {
            id: item.id, 
            boardName: item.boardName, 
            boardType: item.boardType, 
            parentBoard: item.parentBoard, 
            description: item.description, 
            seq: item.seq, 
            level: item.level, 
            idPath: item.idPath, 
            boardPath: item.boardPath
        }

        navItems.push(navItem);       
    })

    //console.log(navItems);

    const resultSideBarData = [

        {
            title: 'Overview', 
            path:'#', 
            icon: <AiIcons.AiFillHome/>,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Users', 
                    path: '#',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Revenue', 
                    path: '#', 
                    icon: <IoIcons.IoIosPaper />, 
                    iconClosed: <RiIcons.RiArrowDownSFill />,
                    iconOpened: <RiIcons.RiArrowUpSFill />,
                    subNav: [
                        {
                            title: 'Reports', 
                            path: '#',
                            icon: <IoIcons.IoIosPaper />

                        }
                    ]
                }
            ],
        }, 
        {
            title: 'Products',
            path: '#',
            icon: <FaIcons.FaCartPlus />
        }
    ];

    return resultSideBarData;
}


function recurSub(item: any){

    
    //recurSub()
}

function BoardNav({boards}: {boards: IBoard[]}) {

    //let boardNavData = props.boardNavData;
    //console.log(boards);
    let navItems = [...boards];



    //console.log(_navItems);

    //const [sidebar, setSidebar] = useState(false);
    const [loadComplete, setLoadComplete] = useState(true);

    const [attribues, setAttribues] = useState({
        sidebar: false, 
        boardData: [{
            title: 'Loading Board Info ...',
            //path: '/support',
            path: '',
            icon: <IoIcons.IoMdHelpCircle />
          },]
    });


    useEffect(()=>{
        return()=>{
            //console.log("useEffect 2");
        }
    }, []);

    //const allBoardData = useDeferredValue(attribues.boardData);
    //const showSidebar = () => setSidebar(!sidebar);
    //const changeHandler = ()=> setAttribues({...attribues, "sidebar": !attribues.sidebar});

    // GetAllBoard().then((res)=>{
    //     setLoadComplete(true);
    //     //setAttribues({...attribues, "dataLoadComplete": true})
    // });

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>

                {/* <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={changeHandler}/>
                    </NavIcon>
                </Nav> */}


            {/* <SidebarNav sidebar={attribues.sidebar}> */}
            <SidebarNav>
                <SidebarWrap>
                    {/* <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={changeHandler} />
                    </NavIcon> */}

                    {/* {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })} */}

                    <>
                        {loadComplete ? navItems.map((item, index) => { return <SideBoardNavItem item={item} key={index} />; }) : <div>&nbsp; loading....&nbsp; <Spinner/></div> }
                    </>
                </SidebarWrap>
            </SidebarNav>

            </IconContext.Provider>
        </>
    );

}



export default function SideBoardNav({boards} : {boards:IBoard[]}){
    // boardItems.forEach((item)=>{
    //     //console.log(item);
    // })

    return(
        <div className='sidebar' >
            {/* <SideBar boardNavData={this.state.boardNavData}/> */}
            <BoardNav boards={convertBoardsForNav(boards)}  />
        </div>
    );

}

