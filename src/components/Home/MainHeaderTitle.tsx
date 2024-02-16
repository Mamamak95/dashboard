import React from "react";
import styled from "styled-components";


interface WelcomeUser{size:number,color:string,weight:number}

const HeaderTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;



const WelcomeUser=styled.div<WelcomeUser>`
  padding: 10px 30px;
  font-size: ${props=>props.size+'px'};
  font-weight: ${props=>props.weight};
  color: ${props=>props.color};
  font-family:'Noto Sans KR';
`

const MainHeaderTitle: React.FC = () => {
  return (
    <>
      <HeaderTitle>
        <WelcomeUser size={22} weight={700} color={'black'}>Welcome Alexa!</WelcomeUser>
        <WelcomeUser size={18} weight={500} color={'#bbb'}>Have a good day</WelcomeUser>
      </HeaderTitle>
    </>
  );
};

export default MainHeaderTitle;
