import React, { useEffect } from 'react';
import axios from "axios";
import { css } from '@emotion/css'
import { ReactComponent as Brand } from '../assets/icon-brand-recognition.svg';

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '../styled-components/Button';
import { ListConatier } from '../styled-components/ListContainer';
import { ListDiv } from '../styled-components/ListDiv';
import { BrandRecognitionCard } from '../styled-components/BrandRecognitionCard';
import { BrandRecognitionContainer } from "../styled-components/BrandRecognitionContainer"

function ShortUrl(props) {

    const [shortUrl, setShorturl] = useState([""])
    console.log(shortUrl)
    console.log(props.inputValue)
    const [btntext, setBtntext] = useState("Copy")
    const [loader, setLoder] = useState(false)


    async function urlShorten() {
        setLoder(true)
        const originalurl = await axios(`https://api.shrtco.de/v2/shorten?url=${props.inputValue}`);
        setShorturl(originalurl.data.result.full_short_link);
        setLoder(false)
    };


    useEffect(() => {
        if (shortUrl.length) {
            urlShorten();
        }
    }
        , [props.inputValue])



    const [copy, setCopy] = useState(false)
    const btnHandler = () => {
        if (copy) {
            setBtntext("Copied")
            setCopy(false)
        } else {
            setBtntext("Copy")
        }
    }
    return (
        <ListConatier className='short-url-container'>


            <ListDiv>
                <p style={{ color: "black" }}><b>{props.inputValue}</b></p>
                <span>
                    <p>{shortUrl}</p>
                    <CopyToClipboard
                        text={shortUrl}
                        onCopy={() => { setCopy(true) }}
                    >
                        <Button className="copy-btn" onClick={btnHandler}>{btntext}</Button>
                    </CopyToClipboard>
                </span>
            </ListDiv>

            <h1 className={css`text-align:center; font-size:50px;`}><b>Advance Statistics</b></h1>
            <h5 className={css`
            max-width:400px;
            text-align:center;
            padding-left:480px;
            opacity:0.5;j`}>Track How your links are performing across the web with our advanced statistics and dashboard</h5>

            <BrandRecognitionContainer>
                <BrandRecognitionCard >
                    <div>
                        <Brand />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click .Generic links dont't mean a thing Branded Links help instill confidence in content  </p>
                </BrandRecognitionCard>

                <BrandRecognitionCard>
                    <div>

                        <Brand className={css`background-color:#3b3054`} />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click .Generic links dont't mean a thing Branded Links help instill confidence in content  </p>
                </BrandRecognitionCard>

                <BrandRecognitionCard>
                    <div>

                        <Brand className={css`background-color:#3b3054`} />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click .Generic links dont't mean a thing Branded Links help instill confidence in content  </p>
                </BrandRecognitionCard>
            </BrandRecognitionContainer>



        </ListConatier>
    );
}

export default ShortUrl;