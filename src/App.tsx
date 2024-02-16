import "./App.css";
import Nav from "./components/Nav";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import useViewSize from "./hooks/useViewSize";
import { useEffect } from "react";

//styled
const Main=styled.div`
display: flex;
width: 100vw;
height: 100vh;
min-width: 800px;

`


function App() {
  
const viewSize=useViewSize()

useEffect(()=>{
  
  console.log(viewSize.width)
},[viewSize])


  return (
    <>
      <Main>
        {viewSize?.width>800?<Nav />:''}
        <Outlet/>
      </Main>
    </>
  );
}

export default App;
