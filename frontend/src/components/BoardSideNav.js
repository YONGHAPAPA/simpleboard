import React, { Suspense, useEffect } from 'react';
import { useState, useDeferredValue } from 'react'
import { Outlet } from 'react-router-dom';
import PostList from './BoardPostList';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib'

import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';



import { SidebarData } from './SiderbarData';
import SubMenu from './SubMenu'
import { RiContactsBookLine } from 'react-icons/ri';


const Nav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const NavIcon = styled(Link)`
    margin-left:2rem;
    font-size:2rem;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center
`;

const SidebarNav = styled.nav`
    background: gray;
    width: 190px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    //top: 0;
`;

const SidebarWrap = styled.div`
    width:100%;
`;

const spinnerRotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(1080deg);
    }
`

const Spinner = styled(ImIcons.ImSpinner2)`

    color:teal;
    font-size: 0.7rem;
    animation: ${spinnerRotate} 3s infinite;
    
`;


async function GetAllBoard(){

    let boardInfo;

    try{
        console.log("getBoardData 1");
        boardInfo = await getBoardData();
        console.log(boardInfo);
        console.log("getBoardData 2");
    }catch(err){

    }

    return boardInfo;
}



function SideBar(props) {

    let boardData = props.sourceData;

    console.log(boardData);

    //const [sidebar, setSidebar] = useState(false);
    const [loadComplete, setLoadComplete] = useState(true);

    const [attribues, setAttribues] = useState({
        sidebar: false, 
        boardData: [{
            title: 'Loading Board Info ...',
            //path: '/support',
            path: '',
            icon: <IoIcons.IoMdHelpCircle />
          },]
    });


    useEffect(()=>{

        //console.log("useEffect 1")

        return()=>{
            //console.log("useEffect 2");
        }

    }, []);

    //const allBoardData = useDeferredValue(attribues.boardData);
    //const showSidebar = () => setSidebar(!sidebar);
    //const changeHandler = ()=> setAttribues({...attribues, "sidebar": !attribues.sidebar});

    //getAllBoard();
    //console.log(`boardInfo ${boardInfo}`);
    //GetAllBoard();

    // GetAllBoard().then((res)=>{
    //     console.log("complete....")

    //     console.log(`loadComplete : ${loadComplete}`)
    //     setLoadComplete(true);
    //     //setAttribues({...attribues, "dataLoadComplete": true})
    // });

    

    

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>

                {/* <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={changeHandler}/>
                    </NavIcon>
                </Nav> */}

            

            <SidebarNav sidebar={attribues.sidebar}>
                <SidebarWrap>
                    {/* <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={changeHandler} />
                    </NavIcon> */}

                    {/* {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })} */}

                    <>
                        {loadComplete ? SidebarData.map((item, index) => { return <SubMenu item={item} key={index} />; }) : <div>&nbsp; loading....&nbsp; <Spinner/></div> }
                    </>
                </SidebarWrap>
            </SidebarNav>

            </IconContext.Provider>
        </>
    );

}


function getBoardData(){

    // fetch("board/getBoardList").then(res=>{

    //     let promise = res.json();

    //     // promise.then((result)=>{
    //     //     console.log(`promise result : ${result}`)
    //     //     return result;
    //     // }, 
    //     // (err)=>{
    //     //     console.log("err >>>>>>>>>>> ")
    //     //     console.log(`${err}`)
    //     // })
    //     // .then((boardData)=>{

    //     //     console.log(`boardData : ${boardData}`)
    //     // })
    //     // .catch((err)=>{
    //     //     console.log("catch >>>>>>>>>")
    //     //     console.log(err);
    //     // })
    // });

    // return fetch("board/getBoardList").then(res=>{
       
    //     if(!res.ok){
    //         alert(`[Error]getAllBoard :: response.Status :: ${res.status} :: ${res.statusText}`);
    //         return;
    //     }

    //     setTimeout(()=>{

    //     }, 2000);
        
    //     return res.json();
    // })

    return new Promise(resolve=>{
        setTimeout(resolve, 4000)
    }).then(async()=>{
        const response = await fetch("board/getBoardList");
        return await response.json();
    })
}


class BoardSideNav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            boardData: props.boardData
        }
    }

    render(){
        return(
            <div className='sidebar' >
                <SideBar sourceData={this.state.boardData}/>
            </div>
        );
    }
}

export default BoardSideNav;