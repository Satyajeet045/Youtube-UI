import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container =styled.div`
  margin-top:10px;
`
const ChannelImage =styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background:color:#999
`
const NewComment =styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:20px;
`
const Input =styled.input`
  background-color:${({theme})=>theme.bgLighter};
  border:None;
  color:${({theme})=>theme.text};
  outline:None;
  padding:5px 5px;
  width:100%;
`
const Comments = () => {
  return (
    <Container>
     <NewComment>
        <ChannelImage src="https://image3.mouthshut.com/images/imagesp/925002091s.jpeg"/>
        <Input placeholder='Add a comment .....'>

        </Input>
     </NewComment>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>



    </Container>
  )
}

export default Comments