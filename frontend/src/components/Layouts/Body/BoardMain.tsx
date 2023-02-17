import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import SideBoardNav from '../SideBar/SideBoardNav';
import { useLoaderData, Outlet } from 'react-router-dom';
import type { IBoard } from '../../Models/boards'


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



function BoardMain(){
    let boards = useLoaderData() as IBoard[];

    return(
        <div className='main-body'>
            <SideBoardNav boards={boards}  />
            {/* <BoardPostList/> */}
            <Outlet />
        </div>
    );
}


export default BoardMain;