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
export const ActLink = styled.link`
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
  display: flex;
  font-family: Roboto ;
  color: #FFF4A6
  border: 1px solid #FFF4A6;
  width: 7rem;
  margin: 2rem auto;
  border-radius: 7px;
  background-color: #0b607b;
  padding : 20px;
  text-align: center;
  justify-content: center;
  
 

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
  background-color: #FF3238;
}

`;

export const Container = styled.body`
background: rgb(71,124,124);
background: linear-gradient(90deg, rgba(71,124,124,1) 0%, rgba(11,96,123,1) 50%, rgba(71,124,124,1) 100%);
  height: 100%;
  width: 100%;
  height: 100%;
  width: auto;
  padding: 2rem;
  align-content: center;
  border-radius: 7px;
`;
