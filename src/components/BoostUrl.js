import React from 'react';
import { Button } from '../styled-components/Button';
import Meteor from "../assets/Meteor.png";
import { css } from '@emotion/css'

function BoostUrl(props) {
    return (
        <div className={css`
        background-image:url(${Meteor});
        height:250px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        `
        } >
            <h1 className={css
                `color:white ;
                @media only screen and (max-width: 400px) {
                    text-align:center;
                }
                `}>Boost Your Links today</h1>
            <Button className={css`border-radius:15px;`}>Get Started</Button>

        </div>
    );
}

export default BoostUrl;