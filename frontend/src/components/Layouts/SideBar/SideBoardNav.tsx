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

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    }
`

const SidbarLabel = styled.span`
    margin-left: 13px;
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

    const boardListData = [

        {
            title: 'Overview', 
            path:'#', 
            icon: <AiIcons.AiFillHome/>,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            showSubNav: true,
            id: '1',
            level: '1',
            boardPath: '1',
            subNav: [
                {
                    title: 'Users', 
                    path: '#',
                    icon: <IoIcons.IoIosPaper />,
                    showSubNav: true,
                    id: '3',
                    level: '2',
                    boardPath: '1>3',
                },
                {
                    title: 'Revenue', 
                    path: '#', 
                    icon: <IoIcons.IoIosPaper />, 
                    iconClosed: <RiIcons.RiArrowDownSFill />,
                    iconOpened: <RiIcons.RiArrowUpSFill />,
                    showSubNav: true,
                    id: '4',
                    level: '2',
                    boardPath: '1>4',
                    subNav: [
                        {
                            title: 'Reports', 
                            path: '#',
                            showSubNav: true,
                            id: '5',
                            level: '3',
                            boardPath: '1>4>5',
                            icon: <IoIcons.IoIosPaper />,
                            iconClosed: <RiIcons.RiArrowDownSFill />,
                            iconOpened: <RiIcons.RiArrowUpSFill />,
                            subNav: [
                                {
                                    title:'dddd', 
                                    path:'#', 
                                    showSubNav: false,
                                    id: '6',
                                    boardPath: '1>4>5>6', 
                                    icon: <IoIcons.IoIosPaper />,
                                    iconClosed: <RiIcons.RiArrowDownSFill />,
                                    iconOpened: <RiIcons.RiArrowUpSFill />,
                                }
                            ]

                        }
                    ]
                }
            ],
        }, 
        {
            title: 'Products',
            path: '#',
            showSubNav: false,
            id: '2',
            level: '1',
            boardPath: '2',
            icon: <FaIcons.FaCartPlus />
        }
    ];

    return boardListData;
}


//function BoardNav({boards}: {boards: IBoard[]}) {
function BoardNav({boardList}: {boardList: any}) {

    let navItems = [...boardList];

    //const [sidebar, setSidebar] = useState(false);
    //const [loadComplete, setLoadComplete] = useState(true);
    //const [toggle, setToggle] = useState(false);
    //showSubNav, 

    console.log(navItems);

    //console.log(...boardList);

    const [sideBoardNavProps, setSideBoardNavProps] = useState({
        navItems: [...boardList], 
        showSubNav : false
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('element click')
    }


    // const [attribues, setAttribues] = useState({
    //     sidebar: false, 
    //     boardData: [{
    //         title: 'Loading Board Info ...',
    //         //path: '/support',
    //         path: '',
    //         icon: <IoIcons.IoMdHelpCircle />
    //       },]
    // });

    // const showNav = ()=>{
    //     setToggle(!toggle);
    // }

    // useEffect(()=>{
    //     console.log(`>>>>>> toggle : ${toggle}`)
    //     return()=>{
    //         //console.log("useEffect 2");
    //     }
    // }, [toggle]);

    const populateSubBoard = (boards: any, rootBoard: any)=>{
        //console.log(boards)
        let subBoards = rootBoard;

        Array.from(boards).map((item: any, index: number)=>{
            //console.log(item.title);
            subBoards.push(<SideBoardNavItem board={item} navItems={navItems} sideBoardNavProps={sideBoardNavProps} setSideBoardNavProps={setSideBoardNavProps} />);

            if(item.subNav && item.showSubNav){
                populateSubBoard(item.subNav, subBoards);
            }
        })

        return subBoards;
    }

    
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

                    <>
                        {/* {loadComplete ? navItems.map((item, index) => { 
                            return <SideBoardNavItem item={item} key={index} />; 
                            }) : <div>&nbsp; loading....&nbsp; <Spinner/></div> 
                        }; */}

                        {/* {
                            navItems.map((board, index) => {
                                return renderNavTree(board, index, 0);
                            })
                        } */}

                        {/* 전체 BoardList 데이터에 대해 하위까지 루프 돌려서 제일 하위까지 메뉴를 그려준다  */}

                        {
                            navItems.map((item:any, index:number)=>{

                                const rootBoard = [<SideBoardNavItem board={item} navItems={navItems} sideBoardNavProps={sideBoardNavProps} setSideBoardNavProps={setSideBoardNavProps} />];

                                if(item.subNav && item.showSubNav){
                                    return populateSubBoard(item.subNav, rootBoard);
                                    //rootBoard.push(subBoards);
                                }
                                
                                return rootBoard;
                            })
                        }

                    </>
                </SidebarWrap>
            </SidebarNav>

            </IconContext.Provider>
        </>
    );

}



export default function SideBoardNav({boardList} : {boardList:IBoard[]}){
    // boardItems.forEach((item)=>{
    //     //console.log(item);
    // })

    return(
        <div className='sidebar' >
            {/* <SideBar boardNavData={this.state.boardNavData}/> */}
            <BoardNav boardList={convertBoardsForNav(boardList)}  />
        </div>
    );

}

