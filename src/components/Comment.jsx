import { ThumbDownAltOutlined,  ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
  diplay:flex;
  gap:10px;
  margin:10px 0px;
` 
const Details  =styled.div`
  display:flex;
  gap:10px;
   
`
const ChannelInfo =styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
  margin-bottom:10px;
`
const ChannelImage =styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color:#999
`
const Name = styled.span`
  color:${({theme})=>theme.text};
  font-weight:500;

`
const Time = styled.span`
  font-size:12px;
  font-weight:400;
  color:${({theme})=>theme.textSoft};
  margin-left:5px;

`
const Info =styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`
const Desc =styled.p`
  font-weight:400;
  color:${({theme})=>theme.text};
  font-size:14px;
`
const Button= styled.button`
  border-radius:10px;
  border:None;
  font-size:15px;
  background-color:transparent;
  color:${({theme})=>theme.text}; 
  cursor:pointer;
 `

const Comment = () => {
  return (
    <Container>
        <Details>
          <ChannelImage src="https://t4.ftcdn.net/jpg/03/04/22/29/240_F_304222985_3QY2n2VgO06dFcFkhxPYDNk4eiu6SnQM.jpg"/>
          <ChannelInfo>
            <Info>
              <Name>Satyajeet Das</Name>
              <Time> 1 year ago</Time>
            </Info>
            <Desc>Best Show since childhood. Love watching while eating Food</Desc>
            <Info>
              <Button> <ThumbUpAltOutlined/></Button>
              <Button><ThumbDownAltOutlined/></Button>
              <Button>Reply</Button>
            </Info>
          </ChannelInfo>
        </Details>
    </Container>
  )
}

export default Comment