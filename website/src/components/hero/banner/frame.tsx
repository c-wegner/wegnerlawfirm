import React from 'react';
import styled from 'styled-components';
import { standards } from '../../../styles/common';
import Panel from './panel';

const Styles = {
    Foundation: styled.div`
        display: flex;
        flex-direction: column;
       border: solid black 1px;
        min-height: 33vh;

        @media(min-width: ${standards.screens.md}){
            flex-direction: row;
        }
    `,

    Column: styled.div`
        flex-grow: 1;
       border: solid black 1px;
    `,

    Tagline: styled.h2`
        text-align: center;
        border: solid black 1px;
        font-size: 1.5rem;

         @media(min-width: ${standards.screens.md}){
            text-align: right;
        } 
    `,

    Heading: styled.h1`
        text-align: center;
        border: solid black 1px;
        font-size: 1.3rem;


         @media(min-width: ${standards.screens.md}){
            text-align: right;
        }     
    `,

    Panel: styled.div`
        margin: auto;
        width: 90%;
        min-height: 50%;
        background-color: white;
        padding: ${standards.padding};

        border: solid 1px black;

        @media(min-width: ${standards.screens.md}){
            margin-right: 0;
            margin-left: auto;
                width: 75%;
        }   
    `,

}

export const Frame: React.FC = () => (
    <Styles.Foundation>
        <Styles.Column>


        </Styles.Column>
        <Styles.Column>


        </Styles.Column>
        <Styles.Column>
            <Styles.Tagline>
                We help businesses grow...

            </Styles.Tagline>
            <Styles.Heading>
                A business attorney in Naples, Florida
            </Styles.Heading>
            <Styles.Panel>
                <Panel />
            </Styles.Panel>
        </Styles.Column>
        <Styles.Column>


        </Styles.Column>
    </Styles.Foundation>
)