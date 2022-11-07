import { ReplyOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Comments from '../components/Comments';
import Card from '../components/Card';


const Container =styled.div`
  display:flex;
  gap:24px;
`
const Content =styled.div`
  flex:5;
  diplay:flex;
  flex-direction:column;
  
`
const Videowrapper =styled.div`
  
`
const Title=styled.h1`
  font-size:17px;
  font-weight:400;
  margin-top:10px;
  margin-bottom:10px;
  color:${({theme})=>theme.text};
`
const Details =styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
`
const Info =styled.span`
  font-weight:14px;
  color:${({theme})=>theme.textSoft};
`
const Buttons =styled.div`
  display:flex;
  gap:20px;
  color:${({theme})=>theme.text};
`
const Button =styled.div`
 cursor:pointer;
 display:flex;
 align-items:center;
 gap:5px;
`
const Hr = styled.hr`
  margin:12px 0px;
  border:0.5px solid ${({theme})=>theme.soft};

`

const Recommendation =styled.div`
  flex:2;

`
const Channel = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:10px;
`
const ChannelInfo =styled.div`
  display:flex;
  gap:10px;
`
const ChannelImage =styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background:color:#999
`
const ChannelName =styled.span`
  color:${({theme})=>theme.text};
  font-size:14px;
  font-weight:bold;
  margin-bottom:5px;
`
const Subscribers =styled.span`
  color:${({theme})=>theme.textSoft};
  font-size:14px;
`
const ChannelDetails=styled.div`
  display:flex;
  flex-direction:column;

`
const Subscribe=styled.button`
  background-color:red;
  height:max-content;
  padding:10px 20px;
  border-radius:16px;
  border:None;
  font-weight:700;
  color:${({theme})=>theme.text};
  cursor:pointer;
`
const ChannelDesc =styled.p`
  margin-top:10px;
  font-size:14px;
  background-color:${({theme})=>theme.bgLighter};
  border:None;
  color:${({theme})=>theme.textSoft};
  
`
 
const Video = () => {
  return (
    <Container>
      <Content>
        <Videowrapper>
         <iframe 
           width="100%" 
           height="620" 
           src="https://www.youtube.com/embed/ERLQH8jc6WQ" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen></iframe> 
        </Videowrapper>
        <Title>Taarak Mehta Ka Ooltah Chashmah | तारक मेहता का उल्टा चश्मा | Episode 915</Title>
        <Details>
          <Info>7,594,468 views . Aug 29, 2019 </Info>
          <Buttons>
            <Button ><ThumbUpAltOutlined/>127k</Button>
            <Button><ThumbDownAltOutlined/>489</Button>
            <Button>
              <ReplyOutlined/> Share
            </Button>
            <Button>
              <PlaylistAddIcon/>Save
            </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
         <ChannelInfo>
          <ChannelImage src="https://image3.mouthshut.com/images/imagesp/925002091s.jpeg"/>
          <ChannelDetails>
             <ChannelName>
               Sony SAB   
             </ChannelName>
             <Subscribers>
               10M subscribers
             </Subscribers>
             <ChannelDesc>
                7.5M views 7 years ago
                -------------------------------------------------------------------------------------------
                Episode 915:
                ---------------------
                Daya with her mother gives Jethalal a new name. While playing a game with Daya his house, Jethalal accidentally hits Bapu Ji. 
                Jethalal gets wet in the rain when a bike splashes water on him on the road. The men of Gokuldham society decide to have a party.   
             </ChannelDesc>
          </ChannelDetails>
         </ChannelInfo>
         <Subscribe>
          Subscribe
         </Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>


        

      </Recommendation>


    </Container>
  )
}

export default Video