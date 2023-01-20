import * as React from 'react'
import {Form, Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import BoardSideNav from './BoardSideNav';
import BoardPostList from './BoardPostList';
import { Switch } from 'react-router-dom';

function BoardBody(){
    return(
        <div className='main-body'>
            <BoardSideNav/>
            <BoardPostList/>
        </div>
    );
}


export default BoardBody;