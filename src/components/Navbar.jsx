import React from 'react'
import styled from 'styled-components'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';



const Container = styled.div`
  position:sticky;
  top:0;
  background-color:${({theme})=>theme.bgLighter};
  height:56px;

`

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  height:100%;
  padding:5px 20px;
  position:relative;

`
const SearchContainer =styled.div`
  width:30%;
  position:absolute;
  gap:5px;
  left:0px;
  right:0px;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 5px;
  border:1px solid #aaa;
  border-radius:14px;
   
`
const Input= styled.input`
  border:None;
  outline:None;
  background-color:transparent; 
  color:${({theme})=> theme.text};
   
`
const Button =styled.button`
  padding: 5px 15px;
  background-color:transparent;
  border: 1px solid blue;
  color:blue;
  cursor:pointer;
  border-radius:3px;
  font-weight:500;
  display:flex;
  align-items:center;
  gap:5px;
`


export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
           <Input  placeholder="Search YouTube"/>
           <SearchIcon/>
        </SearchContainer>
       <Link to="signin" style={{textDecoration:"None"}}>
        <Button>
          <AccountCircleRoundedIcon/> Sign-In
        </Button>
       </Link>
      </Wrapper>

    </Container>
  )
}
 