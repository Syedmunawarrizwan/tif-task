import React from 'react';
import { useState } from 'react';
import { css } from '@emotion/css'
import Meteor from "../assets/Meteor.png"
import { FormContainer } from "../styled-components/FormContainer"
import { PeopleWorking } from '../styled-components/PeopleWorking';
import PeopleWorkingimg from "../assets/people working.png"
import { Button } from '../styled-components/Button';
import userEvent from '@testing-library/user-event';
function ShortenUrlInput(props) {
    const [inputText, setInputText] = useState("")
    const addInputTo = (e) => {
        e.preventDefault()
        if (inputText.length > 1) {

            props.setInputValue(inputText)
        } else {
        }
        setInputText("")

    }
    return (
        <>          <PeopleWorking>
            <h1>MORE THAN JUST SHORTEN LINKS</h1>
            <img src={`${PeopleWorkingimg}`} />

        </PeopleWorking>

            <FormContainer onSubmit={addInputTo} >


                <div className={css`
            background-image:url('${Meteor}')
            `}>



                    <input required placeholder='Shorten a link here.... ' type="text" value={inputText}
                        onChange={(e) => { setInputText(e.target.value) }} />
                    <Button  >Shorten it!</Button>
                </div>
            </FormContainer>
        </>
    );
}

export default ShortenUrlInput;