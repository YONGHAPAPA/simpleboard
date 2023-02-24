import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import SideBoardNav from '../SideBar/SideBoardNav';
import { useLoaderData, Outlet } from 'react-router-dom';
import type { IBoard } from '../../Models/boards'
import * as FaIcons from 'react-icons/fa';


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
    console.log("Render BoardRoot Start !!!");

    const list = [
        {
            id:1, 
            name:"1ST"
        }, {
            id:2, 
            name:"SE",
            sub:[{
                id:3, 
                name:"SE-1"
            }, {
                id:4, 
                name:"SE-2",
                sub:[
                    {
                        id:6, 
                        name:"SE-2-1"
                    }, 
                    {
                        id:7, 
                        name:"SE-2-2"
                    }
                ]
            }]
        }, {
            id:5, 
            name:"3RD"
        }
    ];


    /*
     [M.RMK]2023.02.22
     중첩배열 SCAN해서 원하는 INDEX 의 값을 찾아서 변환처리
    */
    const checkSub = (item:any, index:number, name:string)=>{

        if(item.id == index){
            Object.assign(item, {"name": name});
            return {...item};
        }

        if(item.sub){
            item.sub.map((item:any)=>{
                return {...checkSub(item, index, name)};
            })
        }
        
        return item;
    }

    let newList = list.map((item, index, arg)=>{
        let findItem = checkSub(item, 7, 'NEW NAME');
        return item;
    })

    


    // const [_isRender, setIsRender] = React.useState(false)

    // if(isRender)
    //     setIsRender(!_isRender);


    /* 
        [M.RMK]2023.02.20 
        상위 컴포넌트에서 useLoaderData를 사용하면 하위 컴포넌트에서 이벤트 발생시 
        상위 컴포넌트 까지 모두 새롭게 랜더링이 다시 이뤄진다. 
        useLoaderData는 주의해서 필요에 따라 쓸수 있도록 해준다. 
    */
    //let boards1 = useLoaderData() as IBoard[];

    //임시 데이터
    let boards = [{
        title: 'Products',
        path: '#',
        showSubNav: false,
        id: '2',
        level: '1',
        boardPath: '2',
        icon: <FaIcons.FaCartPlus />
    }]

    return(
        <div className='main-body'>
            {/* <SideBoardNav boardList={boards}  /> */}
            <SideBoardNav />

            {/* <BoardPostList/> */}
            <Outlet />
        </div>
    );
}


export default BoardRoot;