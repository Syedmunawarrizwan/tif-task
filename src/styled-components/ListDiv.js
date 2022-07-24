import styled from "styled-components";
export const ListDiv = styled.div`
  margin: auto;

  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 1050px;
  border-radius: 5px;
  margin-bottom: 10px;
@media only screen and (max-width: 400px) {
width:300px;
height:240px;
display:flex;
flex-direction:column;
// justify-content:space-evenly;
align-items:center;
padding:20px;

hr{
    visibility:visible;
}

p{
    text-align:center;
    font-size:11px;
}
button{
    
}
span{
  
     
    flex-direction:column;
   padding-bottom:20px;
}
}
`;