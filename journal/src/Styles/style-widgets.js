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


`;

export const Container = styled.body`
  background: linear-gradient(40deg);
  height: 100%;
  width: 100%;
  height: 40rem;
  width: auto;
  
  padding: 2rem;
  align-content: center;
  background-color: #0b607b;
  
  `;
export const Banner = styled.div`
  height: 5rem;
  width: auto;
  background-color: #477c7c;
  border-radius: 7px;
  border: 2px solid #FFF4A6
`;
