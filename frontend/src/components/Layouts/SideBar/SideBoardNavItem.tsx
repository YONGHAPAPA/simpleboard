import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const SubMenu = ({item} : {item:any}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  let boardNavTags = "";

  const renderNavItems = (item: any)=>{

    //boardNavTags += item.subNav ? `<SidebarLink title='${item.title}'>` : `<SidebarLink title='${item.title}'/>`
    boardNavTags += `<SidebarLink><div><SidebarLabel>${item.title}</SidebarLabel></div>`
    
    if(item.subNav){
      [...item.subNav].forEach((item)=>{
        renderNavItems(item);
      })
    }

    //boardNavTags += item.subNav ? `</SidebarLink>` : "";
    boardNavTags += `</SideBarLink>`;

    //console.log(boardNavTags);


    return "";
  }

  // const populateBoardNavItem = (_item: any)=>{
  //   let _board = item;
  //   //console.log(board.title)
  //   renderNavItems(item);    
  // }

  return (
    <>
      { item && renderNavItems(item) }

      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>

      {/* 서브메뉴 */}
      {subnav &&
        item.subNav.map((item:any, index:any) => {
          return (
            // <DropdownLink to={item.path} key={index}>
            //   {item.icon}
            //   <SidebarLabel>{item.title}</SidebarLabel>
            // </DropdownLink>

            <>
              {console.log(item.title)}
              
              <SidebarLink to={item.path}>
                <div><SidebarLabel>{item.title}</SidebarLabel></div>
                <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
              </SidebarLink>

              

              {item.subNav && item.subNav.map((item:any, index:any)=>{
                console.log(`title >>>> ${item.title}`);
              })} 

            </>
            
            
            
          );
        })}
    </>
  );
};

export default SubMenu;