import styled from "styled-components";
export const FormContainer = styled.form`
 display:flex;
 justify-content:center;
 align-items:center;
 margin:auto;

// padding-left:100px;
// padding-right:100px;
div
{   
    height:150px;
    width:1150px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    border-radius:5px;

}
input{
    width:750px;
    height:45px;
    border-radius:7px;
border:0px solid white;


}
@media only screen and (max-width: 400px) {
    div{
        height:300px;
        // display:flex;
        flex-direction:column;
        width:350px;
    }
    input{
        width:250px;
        padding:0;
    }
    input::-moz placeholder{
        color:red;
    }
    
}
`
