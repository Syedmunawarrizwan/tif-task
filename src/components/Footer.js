import React, { useState } from "react";
import { css } from "@emotion/css";
import { ReactComponent as Shortly } from "../assets/logo_white.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg";
import { LogosDiv } from "../styled-components/LogosDiv";
import { SocialMediaLogoDiv } from "../styled-components/SocialMediaLogoDiv";
import { FooterContainer } from "../styled-components/FooterContainer";
import userEvent from "@testing-library/user-event";

function Footer(props) {
    const [isHoverdShortly, setIsHoveredShortly] = useState(false);
    const [isHoverdFacebook, setIsHoveredFacebook] = useState(false);
    const [isHoverdTwitter, setIsHoveredTwitter] = useState(false);
    const [isHoverdPinterest, setIsHoveredPinterest] = useState(false);
    const [isHoverdInstagram, setIsHoveredInstagram] = useState(false);
    return (
        <FooterContainer>
            <LogosDiv>
                <Shortly fill={isHoverdShortly ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredShortly(false) }} onMouseEnter={() => { setIsHoveredShortly(true) }}
                    className={css`padding-top:40px; &:hover{
                        cursor: pointer;
                    }`}></Shortly>
                <SocialMediaLogoDiv>
                    <Facebook fill={isHoverdFacebook ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredFacebook(false) }} onMouseEnter={() => { setIsHoveredFacebook(true) }}
                        className={css`
                        &:hover{
                            cursor: pointer;
                        }                   
               @media only screen and (max-width: 400px) {
                display:none;
                }
            `}
                    />
                    <Twitter fill={isHoverdTwitter ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredTwitter(false) }} onMouseEnter={() => { setIsHoveredTwitter(true) }}
                        className={css`
                        &:hover{
                            cursor: pointer;
                        }
                        @media only screen and (max-width: 400px) {
                            display:none;
                            }
             
            `}
                    />
                    <Pinterest fill={isHoverdPinterest ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredPinterest(false) }} onMouseEnter={() => { setIsHoveredPinterest(true) }}
                        className={css`&:hover{
                            cursor: pointer;
                        }
                        @media only screen and (max-width: 400px) {
                            display:none;
                            }
             
            `}
                    />
                    <Instagram fill={isHoverdInstagram ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredInstagram(false) }} onMouseEnter={() => { setIsHoveredInstagram(true) }}
                        className={css`
                        &:hover{
                            cursor: pointer;
                        }
                        @media only screen and (max-width: 400px) {
                            display:none;
                            }
              
            `}
                    />
                </SocialMediaLogoDiv>
            </LogosDiv>
            <div
                className={css`
          display: flex;
        `}
            >
                <div
                    className={css`
            width: 150px;
          `}
                >
                    <p>
                        <b>Features</b>
                    </p>
                    <p>Link Shortening</p>
                    <p>Branded Links </p>
                    <p>Analytics</p>
                </div>
                <div
                    className={css`
            width: 150px;
          `}
                >
                    <p>
                        <b>Resources</b>
                    </p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
                <div
                    className={css`
            width: 150px;
          `}
                >
                    <p>
                        <b>Company</b>
                    </p>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>
            <span className={css`display:none;`}>
                <Facebook className={css`&:hover{
                            cursor: pointer;
                        }`} fill={isHoverdFacebook ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredFacebook(false) }} onMouseEnter={() => { setIsHoveredFacebook(true) }} />
                <Twitter className={css`&:hover{
                            cursor: pointer;
                        }`} fill={isHoverdTwitter ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredTwitter(false) }} onMouseEnter={() => { setIsHoveredTwitter(true) }} />
                <Pinterest className={css`&:hover{
                            cursor: pointer;
                        }`} fill={isHoverdPinterest ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredPinterest(false) }} onMouseEnter={() => { setIsHoveredPinterest(true) }} />
                <Instagram className={css`&:hover{
                            cursor: pointer;
                        }`} fill={isHoverdInstagram ? "cyan" : "white"} onMouseLeave={() => { setIsHoveredInstagram(false) }} onMouseEnter={() => { setIsHoveredInstagram(true) }} />
            </span>
        </FooterContainer>
    );
}

export default Footer;