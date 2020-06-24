import React, {Fragment} from 'react';
import styled from 'styled-components';
import { standards } from '../../../styles/common';

const Styles={
    Title: styled.div `
        text-align: center;
    `,

    SubTitle:styled.div `

    `,
}

const Panel=()=>(
    <Fragment>
        <Styles.Title>
           We only work with business and entreprenours
        </Styles.Title>
        <Styles.SubTitle>
            What type of business do you have?
        </Styles.SubTitle>
    </Fragment>
)

export default Panel;

export const Stage=()=>{
    
}