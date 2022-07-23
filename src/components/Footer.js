import React from 'react';
import { css } from "@emotion/css"
import { ReactComponent as Shortly } from "../assets/logo_white.svg"
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg"
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg"
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg"
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg"
import { LogosDiv } from '../styled-components/LogosDiv';
import { SocialMediaLogoDiv } from "../styled-components/SocialMediaLogoDiv";

function Footer(props) {
    return (
        <div className={css`
        background-color: #232127;
        height:300px;
        color:white;
        display:flex;
        align-items:center;
        gap:10rem;
        padding-left:150px;
        p{
            font-size:14px;
            &:hover{
                color:cyan;
                pointer:cursor;
            }
        }
       
        `}>
            <LogosDiv>
                <Shortly className={css``}></Shortly>
                <SocialMediaLogoDiv>
                    <Facebook className={css`
                    &:hover{
                         fill:red !important;
                         background-color:red;
                    }`} />
                    <Twitter className={css`&:hover{fill:cyan;}`} />
                    <Pinterest className={css`&:hover{fill:cyan;}`} />
                    <Instagram className={css`&:hover{fill:cyan;}`} />
                </SocialMediaLogoDiv>
            </LogosDiv>
            <div className={css`display:flex; `}>
                <div className={css`width:150px;`}>
                    <p><b>Features</b></p>
                    <p>Link Shortening</p>
                    <p>Branded Links </p>
                    <p>Analytics</p>
                </div>
                <div className={css`width:150px;`}>
                    <p><b>Resources</b></p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
                <div className={css`width:150px;`}>
                    <p><b>Company</b></p>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>

        </div >
    );
}

export default Footer;