import styled from "styled-components";
export const BrandRecognitionCard = styled.div`
  // width: 350px;
  background-color: white;
  display: flex;
  position: relative;
  padding-top: 3rem;
  align-items: flex-start;
  flex-direction: column;
  p {
    color: grey;
    font-size: 17px;
    text-align: start;
  }
  div {
    display: flex;
    position: absolute;
    top: -2rem;
    align-items: center;
    justify-content: center;
    background-color: #3b3054;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  padding-left: 20px;
@media only screen and (max-width: 400px) {
  margin-right:30px;
  div{
  left:9rem;
}
  p{
    font-size:12px;
  }
}

  `
  ;