import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./components/header/Header_v1";
import Sidebar from './components/sidebar/Sidebar_v1'



function App() {

  // const [message, setMessage] = useState([]);

  // useEffect(() => {
  //     fetch("/hello")
  //         .then((response) => {
  //             return response.json();
  //         })
  //         .then(function (data) {
  //             setMessage(data);
  //         });
  // }, []);

  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
