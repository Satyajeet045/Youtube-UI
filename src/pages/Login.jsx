import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height: calc(100vh - 56px);
  
  color:${({theme})=>theme.text};

`
{/**100vh-56px to bring it into the center as height of navbar is 56px. **/}
const Wrapper =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${({theme})=>theme.bgLighter} ;
    border:1px solid ${({theme})=>theme.soft};
    padding:20px 50px;
    gap:10px
    

 `
 const Title=styled.h1`
 
 `
 const Name = styled.input`

   color:${({theme})=>theme.textSoft};
   background-color:${({theme})=>theme.bgLighter};
   border:1px solid ${({theme})=>theme.soft};
   border-radius:10px;
   padding:10px;
   width:100%
 `
 const Button =styled.button`
   border-radius:3px;
   color:${({theme})=>theme.textSoft};
   background-color:${({theme})=>theme.bgLighter};
   cursor:pointer;
   border:1px solid ${({theme})=>theme.soft}; 
   padding:10px;

 `

 const SubTitle= styled.h2`
   color:${({theme})=>theme.textSoft};
   font-size:15px;
 `
 const More =styled.div`
   font-size:14px;
   margin-top:5px;
   display:flex;
   align-items:center;
   justify-content:space-between;
   cursor:pointer;
   gap:10px;
   color:purple;
   background-color:${({theme})=>theme.bgLighter};

 `
 const Links =styled.div`
   margin-left:2px;
   
 `
 const Link =styled.span`
    margin-left:20px;
    font-size:14px;
    cursor:pointer;
    color:${({theme})=>theme.textSoft};
    background-color:${({theme})=>theme.bgLighter};
 `
const Login = () => {
  return (
    <Container>
        <Wrapper>
           <Title>Sign-In</Title>
           <SubTitle>to continue to Youtube</SubTitle>
           <Name placeholder='username'/>
           <Name type='password'placeholder="password"/>
           <Button>Sign-in</Button>
           <SubTitle>Or</SubTitle>
           <Name placeholder='username'/>
           <Name placeholder='email'/>
           <Name type='password'placeholder="password"/>
           <Button>Sign-up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
              <Link>Help</Link>
              <Link>Privacy</Link>
              <Link>Contact</Link>
            </Links>
        </More>
    </Container>
  )
}

export default Login