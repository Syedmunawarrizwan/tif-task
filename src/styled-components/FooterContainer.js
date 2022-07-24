import styled from "styled-components";
export const FooterContainer = styled.div`
background-color: #232127;
        // height: 300px;
        color: white;
        display: flex;
        align-items: center;
        gap: 10rem;
        padding-left: 150px;
        p {
          font-size: 14px;
          &:hover {
            color: cyan;
            pointer: cursor;
          }
        }
@media only screen and (max-width: 400px) {
           flex-direction:column;
           
        padding:0px;
           gap:0rem;
           div{
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding-bottom:30px;
           }
           p{
            font-size:10px;
            text-align:center;
           }
           span{
            display:flex;
            gap:1rem;
            padding-bottom:50px;
           }
}
    `