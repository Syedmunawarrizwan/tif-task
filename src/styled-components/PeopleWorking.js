import styled from "styled-components";

export const PeopleWorking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 75px;
    max-width: 1005px;
    text-align: center;
    // padding-left:150px;
    color: #232127;
  }
  img {
    width: 350px;
    height: 350px;
    text-align: center;
  }

@media only screen and (max-width: 400px) {
  img{
    width:400px;
    height:400px
  }
  h1{
    font-size:50px;
    max-width:400px
  }

}`
  ;