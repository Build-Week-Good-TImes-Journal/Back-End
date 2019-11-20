import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  border-radius: 7px;
  background-color: #0b607b
  color: #FF3238
  border: 1px solid #FFF4A6;
  margin: 2rem auto;
  &:hover {
    background-color: #28A40E;
    transform: 1rem;
  }

`;

export const HeaderLogin = styled.h1`
 
  font-family: Roboto ;
  color: #FFF4A6
  border: 1px solid #FFF4A6;
  width: 7rem;
  margin: 2rem auto;
  border-radius: 7px;
  background-color: #0b607b;
  padding : 4px;
  text-align: center;
  
 

`;

export const Info = styled.input`
display: flex;
margin: 1rem auto;
font-family: Roboto ;
color: #FFF4A6
border: 1px solid #FFF4A6;
width: 7rem;
border-radius: 7px;
background-color: #0b607b;
padding : 4px;
text-align: center;  
  &:hover {
    background-color: white;
  }

`;

export const Container = styled.body`
  background-color: #477c7c;
  height: 40rem;
  width: auto;
  border: #28a40e;
  padding: 2rem;
  align-content: center;
`;
