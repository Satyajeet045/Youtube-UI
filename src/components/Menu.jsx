import React from 'react'
import styled from 'styled-components'
import Videoshare from '../img/image.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';


const Container =styled.div`
 flex:1;
 background-color: ${({theme}) =>theme.bg};
 height:115vh;
 color:${({theme}) =>theme.text};
 font-size:14px;
 position:sticky;
 top:0;
`;
const Wrapper =styled.div`
 padding: 18px 26px;
`;
const Logo =styled.div`
 display:flex;
 align-items:center;
 gap:5px;
 font-weight:bold;
 margin-bottom:25px;
`;
const Img =styled.img`
  height:25px;
  background-color:transparent; 

`
const Item =styled.div`
 display:flex;
 align-items:center;
 gap:10px;
 cursor:pointer;
 padding: 5.5px 0px;
 &:hover{
  background-color: ${({theme})=>theme.soft};
 }
`
const Hr =styled.hr`
  margin: 10px 0px;
  border: 0.5px solid ${({theme}) =>theme.soft};
`
const Login =styled.div`
`
const Button =styled.button`
  padding: 5px 15px;
  background-color:transparent;
  border: 1px solid blue;
  color:blue;
  cursor:pointer;
  border-radius:3px;
  font-weight:500;
  margin-top:10px;
  display:flex;
  align-items:center;
  gap:5px;
`
const Title =styled.h2`
  font-size:14px;
  font-weight:500;
  color:#aaaaaa;
  margin-bottom:14px;
  
`

{/* passed as props from the app to menu fucn so that we change using onclick to set to opposite */}
export const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            <Logo>
                <Img src={Videoshare}/>
                VedioShare
            </Logo>
            </Link>
           <Link to="home" style={{textDecoration:"None",color:"inherit"}}>
            <Item>
              <HomeIcon/> 
               Home
            </Item>
           </Link>
            <Item>
              <ExploreIcon/> 
               Explore
            </Item>
            <Item>
              <SubscriptionsIcon/> 
               Subscriptions
            </Item>
            <Hr/>
            <Item>
              <VideoLibraryIcon/> 
               Library
            </Item>
            <Item>
              <HistoryIcon/> 
               History
            </Item>
            <Hr/>
            <Login>
               Sign-in to like videos,comment and subscribe.
             <Link to="signin" style={{textDecoration:"None"}}>
              <Button>
                <AccountCircleRoundedIcon/>SIGN IN
              </Button>
             </Link>
            </Login>
            <Hr/>
            <Title>
             FunnZone
            </Title>
            <Item>
              <LibraryMusicOutlinedIcon/> 
               Music
            </Item>
            <Item>
              <SportsBasketballOutlinedIcon/> 
               Sports
            </Item>
            <Item>
              <SportsEsportsOutlinedIcon/> 
               Gaming
            </Item>
            <Item>
              <MovieCreationOutlinedIcon/> 
               Movies
            </Item>
            <Item>
              <NewspaperOutlinedIcon/> 
               News
            </Item>
            <Item>
              <LiveTvOutlinedIcon/> 
               Live
            </Item>
            <Hr/>
            <Item>
              <SettingsIcon/> 
               Settings
            </Item>
            <Item>
              <ReportIcon/> 
               Report
            </Item>
            <Item>
              <HelpOutlineIcon/> 
               Help
            </Item>
            <Item onClick={()=>setDarkMode(!darkMode)}>
              <DarkModeIcon/> 
               {darkMode ? "Light": "Dark"}Mode
            </Item>

        </Wrapper>
    </Container>
  )
}
