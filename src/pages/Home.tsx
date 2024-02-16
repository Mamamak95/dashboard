import React from 'react'
import styled from 'styled-components'
import useViewSize from '../hooks/useViewSize'
import MainInfo from '../components/Home/MainInfo'
//styled
interface Schedule{display:string}

const ScheduleInfo=styled.section<Schedule>`
  display: ${(props)=>props.display};
  flex: 1;
`


const Home:React.FC=()=>{
  const viewWidth=useViewSize().width
  
  return(
   <>
     <MainInfo/>
    <ScheduleInfo display={viewWidth>1400?'block':'none'}>
      schedule
    </ScheduleInfo>
   </>
  )
}

export default Home