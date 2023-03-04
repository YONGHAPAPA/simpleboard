import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as RiIcons from 'react-icons/ri';

interface ISideBoardNavProps {
  navItems: any, 
  showSubNav: boolean
}

interface IPros {
  board: any,
  sideBoardNavProps: ISideBoardNavProps,
  setSideBoardNavProps: React.Dispatch<React.SetStateAction<ISideBoardNavProps>>;
  navItems: any,
  onClick:(id:number, showSubNav:boolean)=> void
}


interface ISpanBoardNavItem {
  indentLevel: number,
}


//사이드메뉴 top
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 53px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;


const getIndentLevel = (level:number) => {
  //console.log(level); 
  return (10 * level).toString() + "px"}

  const SidebarLabel = styled.span<ISpanBoardNavItem>`
  margin-left: ${props=>(getIndentLevel(props.indentLevel))}
`;


const ButtonArrowUpDown = styled.button`
  font-size: 0.9rem;
  height: 1.2rem;
  width: 1.7rem;
  font-weight: bold;
  margin: 0.5rem;
  padding: 0em 0em 0em 0em;  
  background: silver;
  color: black;
  border: 0px solid silver;
  border-radius: 2px;

  &:hover {
    background: rgba(255, 255, 128, .5);
    cursor: pointer;
  }
`


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
    background: pink;
    cursor: pointer;
  }
`;


function SideBoardNavItem(props:IPros){
  //console.log("SideBoardNavItem Render")
  const board = props.board;

  const toggleSubNavItem = () => {
    props.onClick(board.id, !board.showSubNav);
  }

  const clickNavItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    //event.preventDefault();
    //console.log("clickNavItem");
  }


  return (
   <>
      {/* 
          [M.RMK:2023.02.20]
          리스트로 표현되는 컴포는트 내에 요소에는 별도로 key 값을 설정할 필요없음 
      */}
      {/* <SidebarLink to={board.path} onClick={clickNavItem}> */}
      <SidebarLink to={`${board.id}`} onClick={clickNavItem}>
        <SidebarLabel indentLevel={board.level}>
          <span>
            {/* [{board.level}] */}
            {board.title}&nbsp;
            {
              // board.subNav && (board.showSubNav ? <RiIcons.RiArrowUpSFill/> : <RiIcons.RiArrowDownSFill />) 
              board.subNav && (board.showSubNav ? <ButtonArrowUpDown onClick={toggleSubNavItem}>▴</ButtonArrowUpDown> : <ButtonArrowUpDown onClick={toggleSubNavItem}>▾</ButtonArrowUpDown>) 
            }
          </span>
        </SidebarLabel>
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