import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    margin-top: 80px;
    max-width: 450px; 
    line-height: 56px;

`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;


    input {
        height: 70px;
        width: 100%;
        padding: 0 24px; 
        margin-top: 10px;
        border: 0; 
        border-radius: 5px 0 0 5px;
        border: 2px solid #fff;
        border-right: 0;
        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3
        }
    }

    button {
        width: 210px;
        margin-top: 10px;
        height: 70px;
        background: #04d361;
        border: 0;
        border-radius: 0px 5px 5px 5px;
        color: #fff; 
        font-weight: bold; 
        transition: background-color .2s;
        color: #3a3a3a;

        &:hover {
            background: ${shade(0.2, '#04d361')}
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%; 
        padding-left: 24px;
        padding-right: 24px;
        display: block;
        text-decoration: none; 

        display: flex; 
        align-items: center;

        &:hover {
        transform: translateX(10px);
        transition: transform 0.2s;
        }

        & + a {
            margin-top: 15px;
        }
    }




    img {
        width: 64px; 
        height: 64px; 
        border-radius: 50%;
    }

    div {
        margin-left: 16px; 
        flex: 1;
        strong {
            font-size: 20px; 
            color: #3d3d4d;
        }

        p {
            font-size: 18px; 
            color: #a8a8b3;
            margin-top: 4px;
        }

      
    }
    svg { 
            margin-left: auto;
            height: 100px;
            color: #cbcbd6;
    }
`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;
`;