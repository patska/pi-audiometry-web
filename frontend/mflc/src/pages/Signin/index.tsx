import React, { useCallback, useRef, useContext } from "react";
import { Container, Content, Background } from './styles'
import logoImg from '../../assets/logo.png';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';
import { FormHandles } from "@unform/core";
import * as Yup from 'yup';
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
    email: string, 
    password: string
}

const Signin: React.FC = () => {

    
    const formRef = useRef<FormHandles>( null );

    const { user, signIn } = useAuth();
    
    console.log(user);

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'), 
                password: Yup.string().required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            signIn({
                email: data.email, 
                password: data.password
            });

        
        } catch (error) {

            const errors = getValidationErrors(error);
            
            formRef.current?.setErrors(errors);
            
        }
    }, [signIn]);

   
    return(
        <>
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input icon={FiMail} name="email" placeholder='E-mail'/>
                    <Input icon={FiLock}  name="password" type="password" placeholder='Senha'/>
                    <Button type="submit">Entrar</Button>
                </Form>
                <a href="login">
                <FiLogIn />
                    Criar Conta
                </a>
            </Content>
            <Background />

        </Container>
    </>
    );
};

export default Signin;