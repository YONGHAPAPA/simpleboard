import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import BoardSideNav from './BoardSideNav';
import BoardPostList from './BoardPostList';
import { Switch, useLoaderData } from 'react-router-dom';


function BoardBody(){
    let boardData = useLoaderData();
    //console.log(`loadData : ${loadData}`);

    return(
        <div className='main-body'>
            <BoardSideNav boardData={boardData} />
            <BoardPostList/>
        </div>
    );
}


export default BoardBody;