import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import SideBoardNav from '../SideBar/SideBoardNav';
import BoardPostList from './BoardPostList';
import { useLoaderData, Outlet } from 'react-router-dom';
import { doFetchJSON } from '../../../utils/utilFetch';

import type { IBoard, IBoardNavItem } from '../../Models/boards'
import { initBoardList } from '../../Models/boards';
import { useEffect } from 'react';




// 2023.02.06
// Board 전체 리스트를 조회후 SideNavBar 포멧에 맞게 컨버전처리
// function getBoardNavData(){

//     let boardNavData = "";
//     let allBoards = new Array().fill(null);
//     const url = "board/getAllBoardList";

//     return doFetchJSON(url, "getBoardNavData")
//     .then((boardData)=>{
//         //allBoards = boardData;
//         //return boardData;
//         return boardData.slice();
//     })
//     .catch((err)=>{
//         console.log(`err : ${err}`);
//     })
// }

function convertForNav(arr_list: Array<IBoard>) : Array<IBoardNavItem> {

    const navItem: IBoardNavItem = {
        id: 0, 
        boardName: '', 
        boardType: '', 
        parentBoard: 0, 
        description: '', 
        seq: 0, 
        level: 0, 
        idPath: '',
        boardPath: ''
    };

    const navItems = new Array<IBoardNavItem>();

    arr_list.forEach((item)=>{
        navItem.id = item.id;
        navItem.boardName = item.boardName;
        navItem.boardType = item.boardType;
        navItem.parentBoard = item.parentBoard;
        navItem.description = item.description;
        navItem.seq = item.seq;
        navItem.level = item.level;
        navItem.boardPath = item.boardPath;
        navItems.push(navItem);       
    })

    //console.log(navItems);

    return navItems;
}

function BoardMain(){
    let boardAllData = useLoaderData() as Array<IBoard>;

    //let data = boardLoader();
    //const [boardList, setBoardList] = React.useState([]);
    //console.log(`boardNavData ${boardNavData}`);

    // const sideBoardNavProps = {
    //     boardNavItems :  convertForNav(boardAllData) as Array<IBoardNavItem>
    // }
    const boardNavItems = convertForNav(boardAllData) as Array<IBoardNavItem>;

    return(
        <div className='main-body'>
            <SideBoardNav {...boardNavItems}  />
            {/* <BoardPostList/> */}
            <Outlet />
        </div>
    );
}


export default BoardMain;