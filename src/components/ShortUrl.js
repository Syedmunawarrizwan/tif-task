import React, { useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/css";
import { ReactComponent as Brand } from "../assets/icon-brand-recognition.svg";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "../styled-components/Button";
import { ListConatier } from "../styled-components/ListContainer";
import { ListDiv } from "../styled-components/ListDiv";
import { BrandRecognitionCard } from "../styled-components/BrandRecognitionCard";
import { BrandRecognitionContainer } from "../styled-components/BrandRecognitionContainer";

function ShortUrl(props) {
    const [shortUrl, setShorturl] = useState([]);
    console.log(shortUrl);
    console.log(props.inputValue);
    const [loader, setLoder] = useState(false);

    async function urlShorten() {
        setLoder(true);
        const originalurl = await axios.get(
            `https://api.shrtco.de/v2/shorten?url=${props.inputValue}`
        );
        setShorturl((prevState) => [
            ...prevState,
            { shortenurl: originalurl.data.result.full_short_link, longurl: props.inputValue },
        ]);
        setLoder(false);
    }

    useEffect(() => {
        if (props.inputValue) {
            urlShorten();
        }
    }, [props.inputValue]);

    const btnHandler = (e) => {
        e.target.innerText = "Copied!";
        e.target.style.backgroundColor = "#3b3054";
        setTimeout(() => {
            e.target.innerText = "Copy";
            e.target.style.backgroundColor = "cyan";
        }, 1500);
    };
    return (
        <ListConatier className="short-url-container">
            {loader && <h1 style={{ "text-align": "center" }}>Loading...</h1>}
            {shortUrl.map((url_item, id) => (
                <ListDiv key={id}>
                    <p style={{ color: "black" }}>
                        <b>{url_item.longurl}</b>
                    </p>
                    <hr className={css`visibility:hidden;`} color="grey" height="1px" width="300px" />
                    <span>
                        <p>{url_item.shortenurl}</p>
                        <CopyToClipboard
                            text={url_item.shortenurl}
                        // onCopy={() => { setCopy(true) }}
                        >
                            <Button className="copy-btn" onClick={btnHandler}>
                                Copy
                            </Button>
                        </CopyToClipboard>
                    </span>
                </ListDiv>
            ))}

            <h1
                className={css`
          text-align: center;
          font-size: 50px;
        `}
            >
                <b>Advance Statistics</b>
            </h1>
            <h5
                className={css`
          max-width: 400px;
          text-align: center;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 4rem;
          opacity: 0.5;
        `}
            >
                Track How your links are performing across the web with our advanced
                statistics and dashboard
            </h5>

            <BrandRecognitionContainer>
                <>
                    <BrandRecognitionCard>
                        <div>
                            <Brand />
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>
                            Boost your brand recognition with each click .Generic links dont't
                            mean a thing Branded Links help instill confidence in content{" "}
                        </p>
                    </BrandRecognitionCard>
                    <div className={css`height:1px;
                border-bottom:10px solid cyan;
                padding-left:20px;
                width:50px;
                @media only screen and (max-width: 400px) {
                    border-top:100px solid cyan;
                    width:10px;
                    border-bottom:0px
                
                }`}></div>
                </>
                <BrandRecognitionCard>
                    <div>
                        <Brand
                            className={css`
                background-color: #3b3054;
              `}
                        />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click .Generic links dont't
                        mean a thing Branded Links help instill confidence in content{" "}
                    </p>
                </BrandRecognitionCard>
                <div className={css`height:1px;
                border-bottom:10px solid cyan;
                padding-left:20px;
                width:50px;
@media only screen and (max-width: 400px) {
    border-top:100px solid cyan;
    width:10px;
    border-bottom:0px

}`}></div>

                <BrandRecognitionCard>
                    <div>
                        <Brand
                            className={css`
                background-color: #3b3054;
              `}
                        />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click .Generic links dont't
                        mean a thing Branded Links help instill confidence in content{" "}
                    </p>
                </BrandRecognitionCard>
            </BrandRecognitionContainer>
        </ListConatier>
    );
}

export default ShortUrl;