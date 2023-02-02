import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState, useCallback} from 'react'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Form, Outlet, Route, RouterProvider, Routes} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./components/Header";
import BoardBody from "./components/BoardBody";
import Footer from "./components/Footer"
import Sidebar from './components/BoardSideNav'
import Content from './components/BoardPostList';
import { ImSleepy } from 'react-icons/im';



function App() {

  // const [message, setMessage] = useState([]);

  useEffect(()=>{
    
    // fetch("hello")
    // .then((response) => {
    //   console.log(response.json());
    // })
    // .then(function (data) {
    //     console.log(data);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  }, []);

//   const router = <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Layout/>} >
//       <Route index element={<BoardBody/>} />
//       <Route path="2" element={<Body2/>} />
//     </Route>
//   </Routes>
// </BrowserRouter>;

  let router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Layout/> } >
       <Route index loader={ boardLoader } element={ <BoardBody/> } />
       <Route path="2" element={ <Body2/> } />
    </Route>
  ));


  const RootFallback = ()=>{
  
    const loadingDot = ['.', '..', '...', '....', '.....'];
    const [dot, setDot] = useState("");

    let step = 0;
    let index = 0;

    const movingDot = useCallback(()=>{
      step++;
      index = step % loadingDot.length;
      setDot(loadingDot[index]);
    }, []);

    useEffect(()=>{
      const interID = setInterval(movingDot, 500)

      return ()=> {
        clearInterval(interID);
      }
    }, [movingDot])    
    
    return (
        <div>Loading {dot}</div>
    );
  }

  return (
      <RouterProvider router={router} fallbackElement={<RootFallback/>} />
  );
}


function sleep(n = 2000){
  return new Promise((resolve)=>{setTimeout(resolve, n)});
}

async function boardLoader(){
  //await sleep(); 
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




function Body2(){
  return(
    <>
      Body2
    </>
  )
}


export default App;
