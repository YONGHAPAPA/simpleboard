import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ISideBoardNavProps {
  navItems: any, 
  showSubNav: boolean
}

interface IPros {
  board: any,
  sideBoardNavProps: ISideBoardNavProps,
  setSideBoardNavProps: React.Dispatch<React.SetStateAction<ISideBoardNavProps>>;
  navItems: any,
}

//사이드메뉴 top
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 13px;
`;

//서브메뉴 1
const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;


function SideBarItem(props : any){

  const board = props[0];
  const toggle = props[1];

  //console.log(board.path);
  //console.log(toggle);

  //useState Hook 을 사용하기 위해서 별도로 SideBarItem component 로 불리했음..... 개선점 필요
  //const [subBoard, setSubBoard] = useState(false);

  //const toggleSubBoard = () => {
  //setSubBoard(!subBoard);

  //console.log(`${board.title} toggle subboard >> ${subBoard}`)
  //}

  return <SidebarLink to={board.path}><SidebarLabel>{board.title}</SidebarLabel>{board.subNav && board.iconClosed}</SidebarLink>
}


function SideBoardNavItem(props:IPros, boards: any){
    
  const board = props.board;
  //const sideBoardNavProps:ISideBoardNavProps = props.sideBoardNavProps;
  const sideBoardNavProps = props.sideBoardNavProps;
  const setSideBoardNavProps = props.setSideBoardNavProps;


  //console.log(...props.navItems);

  //if(sideBoardNavProps.navItems) console.log(sideBoardNavProps.navItems);


  const toggleBoard = () => {
    //console.log("toggle");
    //console.log(`${board.id} : ${board.title} : ${sideBoardNavProps.showSubNav}`)
    const temp = [{
            title: 'Overview', 
            path:'#', 
            icon: "",
            iconClosed: "",
            iconOpened: "",
            showSubNav: true,
            id: '1',
            level: '1',
            boardPath: '1',
    }];
    

    setSideBoardNavProps({"navItems":[...temp], "showSubNav":!sideBoardNavProps.showSubNav});

    console.log([...sideBoardNavProps.navItems])
  }

  // const renderNavItems = (item: any)=>{

  //   //boardNavTags += item.subNav ? `<SidebarLink title='${item.title}'>` : `<SidebarLink title='${item.title}'/>`
  //   boardNavTags += `<SidebarLink><div><SidebarLabel>${item.title}</SidebarLabel></div>`
    
  //   if(item.subNav){
  //     [...item.subNav].forEach((item)=>{
  //       renderNavItems(item);
  //     })
  //   }

  //   //boardNavTags += item.subNav ? `</SidebarLink>` : "";
  //   boardNavTags += `</SideBarLink>`;
  // }


  return (
   <>
      <SidebarLink to={board.path} onClick={toggleBoard}>
        <SidebarLabel>{board.title}</SidebarLabel>
      </SidebarLink>
    </>


    // <>
    //   <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
    //     <div>
    //       {item.icon}
    //       <SidebarLabel>{item.title}</SidebarLabel>
    //     </div>
    //     <div>
    //       {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
    //     </div>
    //   </SidebarLink>

    //   {/* 서브메뉴 */}
    //   {subnav &&
    //     item.subNav.map((item:any, index:any) => {
    //       return (
    //         // <DropdownLink to={item.path} key={index}>
    //         //   {item.icon}
    //         //   <SidebarLabel>{item.title}</SidebarLabel>
    //         // </DropdownLink>

    //         <>
    //           {/* {console.log(item.title)} */}
              
    //           <SidebarLink to={item.path}>
    //             <div><SidebarLabel>{item.title}</SidebarLabel></div>
    //             <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
    //           </SidebarLink>

    //           {item.subNav && item.subNav.map((item:any, index:any)=>{
    //             // console.log(`title >>>> ${item.title}`);
    //           })} 

    //         </>
    //       );
    //     })}
    // </>
    
  );
};

export default SideBoardNavItem;