import React from 'react'
import styled from 'styled-components'
import { MdDashboard,MdSettings,MdEmail  } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";import { RiGroupFill } from "react-icons/ri";
import { IoFileTrayFull } from "react-icons/io5";

//styled

const Section=styled.section`
  width: 300px;
`

const LogoWrap=styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoBox=styled.div`
  width: 177px;
  height: 50px;
`
const Img=styled.img`
  width: 100%;
  height: 100%;
`
const NavList=styled.ul`
  margin: 0;

  padding: 20px 0 0 0;
  list-style: none;
  position: relative;
`
const Li=styled.li`
  min-width: 200px;
  height: 100px;
  padding-left: 25%;
  font-size: 25px;
  font-weight: 500;
  color: #bbb;
  &>svg{
    transform: translateY(10%);
  }
`

// const Libg=styled.li`
//   position: absolute;
// `

const Nav:React.FC=()=>{


return(
  <>
    <Section>
      <LogoWrap>
        <LogoBox>
        <Img src="/sampleLogo.png" alt=""></Img>
        </LogoBox>
        </LogoWrap>
        <NavList>
          <Li><MdDashboard/> Dash Board</Li>
          <Li><MdCalendarMonth /> Schedule</Li>
          <Li><IoFileTrayFull/> Homework</Li>
          <Li><MdEmail /> Message</Li>
          <Li><RiGroupFill/> Group</Li>
          <Li><MdSettings /> Settings</Li>
        </NavList>
    </Section>
  </>
)
}



export default Nav