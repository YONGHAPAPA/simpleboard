import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState} from 'react'
import {BrowserRouter, createBrowserRouter, Form, Outlet, Route, RouterProvider, Routes} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./components/Header";
import BoardBody from "./components/BoardBody";
import Footer from "./components/Footer"
import Sidebar from './components/BoardSideNav'
import Content from './components/BoardPostList';



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

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Body/>} />
          <Route path="2" element={<Body2/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



function Layout(){

  return(
    <div>
      <Head/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

function Head(){
  return(
    <>
      <Header/>
    </>
  );
}

function Body(){
  return(
    <>
      <BoardBody/>
    </>
  )
}

function Body2(){
  return(
    <>
      Body2
    </>
  )
}


export default App;
