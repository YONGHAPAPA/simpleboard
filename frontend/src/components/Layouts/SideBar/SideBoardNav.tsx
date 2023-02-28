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

import type { IBoard, IBoards } from '../../Models/boards';


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


export interface ISideBoardNavItem {
    title: string, 
    path: string, 
    icon: string, 
    showSubNav?: boolean, 
    id: number, 
    level: number, 
    boardPath: string, 
    subNav?: ISideBoardNavItem[]
}


function convertBoardsForNav(navBoardItems: ISideBoardNavItem[]) : any {

    //console.log("convertBoardsForNav");
    //let navItem: IBoardNavItem;
    let navItems :ISideBoardNavItem[] = Array<ISideBoardNavItem>();

    
    const boardListData = [

        {
            title: 'Overview', 
            path:'#', 
            icon: <AiIcons.AiFillHome/>,
            showSubNav: false,
            id: '1',
            level: '1',
            boardPath: '1',
            subNav: [
                {
                    title: 'Users', 
                    path: '#',
                    icon: <IoIcons.IoIosPaper />,
                    showSubNav: false,
                    id: '3',
                    level: '2',
                    boardPath: '1>3',
                },
                {
                    title: 'Revenue', 
                    path: '#', 
                    icon: <IoIcons.IoIosPaper />, 
                    showSubNav: false,
                    id: '4',
                    level: '2',
                    boardPath: '1>4',
                    subNav: [
                        {
                            title: 'Reports', 
                            path: '#',
                            showSubNav: false,
                            id: '5',
                            level: '3',
                            boardPath: '1>4>5',
                            icon: <IoIcons.IoIosPaper />,
                            subNav: [
                                {
                                    title:'dddd', 
                                    path:'#', 
                                    showSubNav: false,
                                    id: '6',
                                    level: '4',
                                    boardPath: '1>4>5>6', 
                                    icon: <IoIcons.IoIosPaper />,
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
    //return navBoardItems;
}


const toggleNavItem = (boardId: number, showSubNav: boolean, navItems: any) => {
    let newBoard = navItems.map((item:any)=>{
        if(item.id == boardId){
            Object.assign(item, {"showSubNav": showSubNav})
        }

        if(item.subNav){
            let subItems = toggleNavItem(boardId, showSubNav, item.subNav)
            Object.assign(item.subNav, subItems);
        }

        return item;
    })

    return newBoard;
}


//function BoardNav({boards}: {boards: IBoard[]}) {
//function BoardNav(boardList: ISideBoardNavItem[]) {
function BoardNav({boardNavItems}: {boardNavItems: ISideBoardNavItem[]}) {

    //let navItems = [...boardList];
    let _navItems = Array.from([...boardNavItems]);

    const [sideBoardNavProps, setSideBoardNavProps] = useState({
        navItems: boardNavItems, 
        showSubNav : false
    });

    //console.log(sideBoardNavProps.navItems);

    const handleClick = (boardId: number, showSubNav: boolean) => {
        //console.log(`handleClick ${boardId} ${showSubNav}`);
        let navItems = toggleNavItem(boardId, showSubNav, sideBoardNavProps.navItems);
        setSideBoardNavProps({"navItems": [...navItems], "showSubNav":showSubNav})
    }

    useEffect(()=>{
        //console.log("useEffect")
        //console.log(sideBoardNavProps.navItems);
        //sideBoardNavProps.navItems
    })


    const renderBoardNav = (boards: any, rootBoard: any)=>{
        let subBoards = rootBoard;

        Array.from(boards).map((item: any, index: number)=>{
            /*
                [M.RMK]:2023.02.20
                어떤 'Coponent' 간에 List 형태로 랜더링 될때는 key 값(유니크값) 할당이 필요하다. 정의 하지 않으면 
                Warning: Each child in a list should have a unique "key"  
                라고 wanrning 메세지가 발생.
                <SideBoardNavItem key={item.id} ...
            */           
            subBoards.push(<SideBoardNavItem key={item.id} board={item} navItems={sideBoardNavProps.navItems} sideBoardNavProps={sideBoardNavProps} setSideBoardNavProps={setSideBoardNavProps} onClick={handleClick} />);

            if(item.subNav && item.showSubNav){
                renderBoardNav(item.subNav, subBoards);
            }
        })

        return subBoards;
    }

    
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>

                {/* <Navn key={index}>
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

                        {/* 전체 BoardList 데이터에 대해 하위까지 루프 돌려서 제일 하위까지 메뉴를 그려준다  */}

                        {
                            sideBoardNavProps.navItems.map((item:any, index:number)=>{
                                //console.log(`item.id ${item.id}`);

                                const rootBoard = [<SideBoardNavItem key={item.id}  board={item} navItems={sideBoardNavProps.navItems} sideBoardNavProps={sideBoardNavProps} setSideBoardNavProps={setSideBoardNavProps} onClick={handleClick} />];
                                //const rootBoard = [<SideBoardNavItem key={item.id}  board={item} />];

                                if(item.subNav && item.showSubNav){
                                    return renderBoardNav(item.subNav, rootBoard);
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


const arrangeIBoardsForNav = (rootBoards: IBoard[], boards: IBoard[], step: number) => {
    //console.log(`step : ${step}`)
    //let navItem : ISideBoardNavItem = { id:1, title:"", path:"", icon:"", level:0, boardPath:""}
    let navItem: ISideBoardNavItem;
    let boardNavItems: ISideBoardNavItem[] = Array<ISideBoardNavItem>();
    boardNavItems = Array<ISideBoardNavItem>();

    rootBoards.forEach((rootBoard)=>{
        navItem = {
            "title": rootBoard.boardName, 
            "path": rootBoard.idPath, 
            "icon": rootBoard.boardType, 
            "showSubNav": false, 
            "id": rootBoard.id, 
            "level": rootBoard.level, 
            "boardPath": rootBoard.boardPath,
        }

        let childBoards = boards.filter((board)=>(
            rootBoard.id == board.parentBoard
        )).sort((a, b)=>{ return a.seq - b.seq})

        if(childBoards.length > 0){
            let subNavItems: ISideBoardNavItem[] = arrangeIBoardsForNav(childBoards, boards, step++);
            Object.assign(navItem, {"subNav": subNavItems})
        }

        boardNavItems.push(navItem);
    })

    return boardNavItems;
}



export default function SideBoardNav({boards} : {boards:IBoards}){
    //console.log("Render SideBoardNav Start !!!! ");
    const [navItems, setNavItems] = useState<ISideBoardNavItem[]>([]);

    //let boardList:IBoard[] = Array<IBoard>();
    let boardNavList: ISideBoardNavItem[] = Array<ISideBoardNavItem>();

    useEffect(()=>{
        convertBoardsForNav(boards);
    }, []);

    const convertBoardsForNav = (boards: IBoards) => {
        const rootBoard: IBoards = boards.filter((board)=>(
            board.level == 1
        )).sort((a,b)=>{
            return a.seq - b.seq;
        })

        boardNavList = arrangeIBoardsForNav(rootBoard, boards, 1);
        setNavItems(boardNavList);
    }
    
    return(
        <div className='sidebar' >
            {/* <SideBar boardNavData={this.state.boardNavData}/> */}
            
            { navItems.length > 0 
            && <BoardNav boardNavItems={navItems}  /> }
        </div>
    );

}

