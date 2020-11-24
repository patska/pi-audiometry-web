import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps>  = ({ children, ...rest}) => {
    return(
             <ButtonStyle type="button" {...rest}>{ children }</ButtonStyle>
    );
}

export default Button; 