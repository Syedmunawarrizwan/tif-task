import styled from "styled-components";
export const HeaderContainer = styled.div`
height:50px;
display:flex;
align-items:center;

padding-left:100px;
padding-top:20px;
gap:1rem;
p{
  color:grey;
}

p{
  &:hover{
    color:black;
    cursor:pointer;
  }
}
@media only screen and (max-width: 400px) {
    
      width:400px;
      height:50x;
      padding:0;
      padding-left:10px;
      h2{
        width:150px;
        height:15px;
        padding-bottom:20px;
      }
      p{
        font-size:10px;
      }
  
  }
  
`;
