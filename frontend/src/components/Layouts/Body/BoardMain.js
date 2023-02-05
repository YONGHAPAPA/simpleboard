import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import SideBoardNav from '../SideBar/SideBoardNav';
import BoardPostList from '../../BoardPostList';
import { Switch, useLoaderData } from 'react-router-dom';


function BoardMain(){
    let boardData = useLoaderData();
    console.log(`loadData : ${boardData}`);

    return(
        <div className='main-body'>
            <SideBoardNav boardData={boardData} />
            <BoardPostList/>
        </div>
    );
}


export default BoardMain;