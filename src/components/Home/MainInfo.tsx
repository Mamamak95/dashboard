import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import MainHeaderTitle from "./MainHeaderTitle";
const Section = styled.section`
  min-width: 50%;

  flex: 1;
  background-color: #f9f9f9;
`;
const MainHeader = styled.div`
  display: flex;
  height: 150px;
`;

const MainInfo: React.FC = () => {
  return (
    <Section>
      <MainHeader>
        <MainHeaderTitle />
        
        <SearchBar></SearchBar>
      </MainHeader>
    </Section>
  );
};

export default MainInfo;
