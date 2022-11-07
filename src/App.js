import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";


const Container  =styled.div`
  display:flex;
`
const Main = styled.div`
 flex:7;
 background-color:${({theme}) => theme.bgLighter};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`


function App() {
  const [darkMode,setDarkMode] = useState(true)

  return (
   <ThemeProvider theme ={darkMode ? darkTheme : lightTheme }>    
    <Container>
     <BrowserRouter>
      {/**passed as a props darkmode useState which intially is set to dark **/ }  
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main> 
        <Navbar/>
        <Wrapper >
           <Routes>
            {/* Main route  */}
            <Route path="/">
              {/* when we will visit index page it will direct to home page */}
              <Route  index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="signin" element={<Login/>}/>

              {/* Inside home page when we click vedio it redirect to vedio each on diff id */}
              <Route  path="video">
                <Route path=":id" element={<Video/>}/>
              </Route>
            </Route>
           </Routes>
        </Wrapper>
      </Main>
     </BrowserRouter>
    </Container>
   </ThemeProvider>
  );
}

export default App;
