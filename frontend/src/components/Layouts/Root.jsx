import * as React from 'react'

import Header from './Head/Header';
import BoardRoot from './Body/BoardRoot';
import AboutMain from './Body/AboutMain';
import BoardPostList from './Body/BoardPostList';
import DashBoard from './Body/DashBoard';
import BoardAnnouncement from './Body/BoardAnnouncement';

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { sleep as sleep2 } from '../sample'
import { sleep } from '../../utils/utilExtra'
import { getAllBoardList } from '../Models/boards'


async function boardLoader(){
    const boardListData = "";
    //const inter = await sleep(2000, "boardLoader", true);
    //let boardSetData = new Array().fill(null);
    //const boardListData = await getAllBoardList();
    return boardListData;
}


function Layout(){
    return(
        <div className='flex-area'>
            <div className='top-start'> 
                <Header/>
                <Outlet/>
            </div>

            <div className='bottom-start'>
                {/* <Footer/> */}
            </div>      
        </div>
    );
}

class Root extends React.Component {
    render(){

        let router = createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={ <Layout/> } >
                    <Route index element={ <DashBoard />} /> 
                    <Route path="/board" element={ <BoardRoot />}>
                        <Route index element={ <BoardAnnouncement />}/>
                        <Route path=":boardId" element={ <BoardPostList />}/>
                    </Route>
                    <Route path="/about" element={ <AboutMain/> } />
                </Route>
            )
        );

        return(
            <RouterProvider router={ router } />
        );
    }
}




export default Root;