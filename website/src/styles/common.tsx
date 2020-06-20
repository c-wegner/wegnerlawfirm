import React from 'react';
import styled from 'styled-components';

export const Constants ={
    screens:{
        sm:'576px',
        md: '768px',
        lg:'992px',
        xl:'1200px',
    },

    colors:{
        type:'black',
        primary: 'red',
        secondary: 'blue',
        footer:{
            type: 'silver',
            background: '#222',
        }
    }
}

interface ITextOutline{
    color?:string;
    children?:any;
}

const Styles ={
    Outline:styled.span<ITextOutline> `
        text-shadow: -1px 1px 0 ${p=>p.color}, 1px 1px 0 ${p=>p.color}, 1px -1px 0 ${p=>p.color}; -1px -1px 0 ${p=>p.color};
    `,
}

export const TextOutline:React.FC<ITextOutline>=({color='#000', children})=>(
    <Styles.Outline color={color}>
        {children}
    </Styles.Outline>
)