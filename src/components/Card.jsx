import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container =styled.div`
  width:360px;
  margin-bottom: ${(props)=>props.type === "sm" ? "10px":"45px"};
  cursor:pointer;
  display:${(props)=>props.type === "sm" && "flex"};
  gap:10px;
`
const Image =styled.img`
  width:100%;
  height: ${(props)=>props.type === "sm" ? "120px":"202px"};
  background-color:#999;
  flex:1;

`
const Details =styled.div`
  display:flex;
  margin-top:${(props)=>props.type !== "sm" && "16px"};
  gap:12px;
  flex:1;
`
const ChannelImage =styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color: #999;
  display:${(props)=>props.type==="sm" && "None"};

`
const Text =styled.div`
  
`
const Title =styled.h1` 
  font-size:16px;
  font-weight:500;
  color:${({theme})=>theme.text};
`
const ChannelName =styled.h2`
  font-size:14px;
  color:${({theme})=> theme.textSoft};
  margin: ${(props)=>props.type ==="sm" ? "5 px 0px" : "9px 0px"};
  
`
const Info =styled.div`
  font-size:14px;
  color:${({theme})=> theme.textSoft};
`


const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}  >
    <Container type={type}>
      <Image type={type} src="https://i.ytimg.com/vi/ERLQH8jc6WQ/maxresdefault.jpg"/>
      <Details type={type}>
        <ChannelImage type={type} src="https://image3.mouthshut.com/images/imagesp/925002091s.jpeg"/>
        <Text>
          <Title type={type}>Taarak Mehta Ka Ooltah Chashmah | तारक मेहता का उल्टा चश्मा | Episode 915</Title>
          <ChannelName type={type}>Sony SAB</ChannelName>
          <Info> 7.5M views . 5 years ago</Info>
        </Text>
      </Details>
    </Container>
    </Link>
  )
}

export default Card