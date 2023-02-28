import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import SideBoardNav from '../SideBar/SideBoardNav';
import { useLoaderData, Outlet } from 'react-router-dom';
import type { IBoard, IBoards } from '../../Models/boards'
import * as FaIcons from 'react-icons/fa';

import { getAllBoardList } from '../../Models/boards';


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



function BoardRoot(){
    //console.log("Render BoardRoot Start !!!");
    /* 
        [M.RMK]2023.02.20 
        상위 컴포넌트에서 useLoaderData를 사용하면 하위 컴포넌트에서 이벤트 발생시 
        상위 컴포넌트 까지 모두 새롭게 랜더링이 다시 되네. 
        useLoaderData는 주의해서 필요에 따라 쓸수 있도록 하자. 
    */
    const [boards, setBoards] = React.useState<IBoards>();

    const loadBoards = async ()=>{
        const allBoards = await getAllBoardList().then((data)=>{
            return data;
        })

        setBoards(allBoards);
    }

    React.useEffect(()=>{
        loadBoards();
    },[]);
    
    //console.log(boards);

    return(
        <div className='main-body'>
            <>{boards && <SideBoardNav boards={boards} />}</>
            <Outlet />
        </div>
    );
}


export default BoardRoot;