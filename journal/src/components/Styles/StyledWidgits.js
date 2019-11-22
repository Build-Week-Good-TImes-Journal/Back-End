import styled from "styled-components"

export const Logo = styled.img`
    height:160px ;  
    width:90%;
    padding-top:15px;
`

export const Container =styled.div`
    background-color: #baebd2;
    width:70%;
    height:500px;
    margin:5% 15% 1% 15%;
    border-radius:10px;
`;

export const Contain=styled.div`
    display:flex;
    justify-content:space-evenly;
    align-content:flex-start;
`


export const ActInfo = styled.h2`
  font-family: "typewriter";
  color: black;
`;

export const ActInfo2 = styled.p`
  font-family: "typewriter";
  color: #fff4a6;
`;
export const ActInfo3 = styled.h4`
  font-family: "typewriter";
  color: #fff4a6;
`;

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
`

