import React from 'react';
import { css } from '@emotion/css'
import styled from 'styled-components';
import { HeaderContainer } from '../styled-components/HeaderContainer';



function Header(props) {


    return (
        <HeaderContainer>


            <h2>Shortly</h2>
            <p>features</p>
            <p>pricing</p>
            <p>resources</p>
        </HeaderContainer>

    );
}

export default Header;