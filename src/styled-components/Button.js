import styled from "styled-components";
export const Button = styled.button`
background-color:#2acfcf;
color:white;
text-align:center;
height:45px;
width:134px;
border:0px solid white;
border-radius:5px;
font-size:15px;
pointer:cursor;
&:hover{
    background-color:#7DF9FF;                    
    cursor: pointer;
}
@media only screen and (max-width: 400px) {
    width:250px;
}

`