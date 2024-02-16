import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const SearchBox=styled.div`
width: 250px;
padding: 10px;
border: 1px solid black;
border-radius: 30px;
background-color: #fff;
`

const MainSearch = styled.input`
  width: 200px;
  font-size: 20px;
  background-color: #fff;


`;

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <SearchWrapper>
       <SearchBox>
       <IoSearch></IoSearch>
          <MainSearch
            type="text"
            name="search"
            value={search}
            placeholder="Search"
          ></MainSearch>
       </SearchBox>
      </SearchWrapper>
    </>
  );
};

export default SearchBar;
