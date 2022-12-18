import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState} from 'react'
import Header from "./components/header/standard/Header"

function App() {

  const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch("/hello")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);



  return (
    <Fragment>
      <div className="App"></div>
      <Header/>
    </Fragment>
  );
}

export default App;
