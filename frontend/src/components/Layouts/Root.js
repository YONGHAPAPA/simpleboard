import * as React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Header from './Head/Header';
import BoardMain from './Body/BoardMain';
import { sleep } from '../sample'


class Root extends React.Component {
    render(){

        let router = createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={ <Layout/> } >
                    <Route index element={ <BoardMain/>} loader={ boardLoader }  />
                </Route>
            )
        );

        return(
            <RouterProvider router={router} />
        );
    }
}





async function boardLoader(){


    console.log("boardLoader =========================================== > ")
    let ss = sleep(3000);

    


    let boardSetData = new Array().fill(null);
    const response = await fetch("board/getBoardList")
    await response.json().then((data)=>{
        boardSetData = data;
    })

    return boardSetData;
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

export default Root;