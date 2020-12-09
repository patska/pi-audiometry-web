import React, { useState, useEffect, FormEvent } from "react";
import logoImg from "../../assets/github-logo.svg";
import { Title, Form, Repositories, Error } from "./styles";
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


const Dashboard = () => {

    const [newRepo, setNewRepo] = useState('');
    const [newCPF, setNewCPF] = useState('');
    const [newBirthDay, setNewBirthDay] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if(storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            return [];
        }
    });

    

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories])

    async function handleAddRepository(event){
        event.preventDefault();

        if(!newRepo){
            setInputError('Digite o nome completo');
            return;
        }
        if(!newCPF){
            setInputError('Digite o CPF');
            return;
        }
        if(!TestaCPF(newCPF)) {
            setInputError('CPF inválido');
            return; 
        }
        if(!newBirthDay){
            setInputError('Digite a Data de Nascimento');
            return;
        }
       

        function TestaCPF(strCPF) {
            strCPF = strCPF.replace(/\./g, "");
            strCPF = strCPF.replace(/\-/g, "");

            console.log(strCPF);
            var Soma;
            var Resto;
            Soma = 0;
          if (strCPF == "00000000000") return false;
        
          for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
        
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
        
          Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
        
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
            return true;
        }

       try {
        
        const repository = {
            "full_name": newRepo,
            "cpf": newCPF, 
            "birthday": newBirthDay, 
            "exams": [

            ]
        };
        
        setRepositories([... repositories, repository]);
        setNewRepo('');
        setNewCPF('');
        setNewBirthDay('');
        setInputError('');
       } catch (err){
           setInputError('Erro na busca do repositório');
       }    
    }

    return (
        <>
        <img src={logoImg} alt="Github Explorer" /> 
        <Title>Bem vindo!</Title>
        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Nome completo" />
            <CpfCnpj
                value={newCPF}
                onChange={(e) => {
                setNewCPF(e.target.value);
                }}
                placeholder="CPF"
                
            />
            <input onfocus="(this.type='date')" onblur="(this.type='text')" value={newBirthDay} onChange={(e) => setNewBirthDay(e.target.value)} placeholder="Data de nascimento" />
            <button type="submit">Adicionar</button>
        </Form>
        { inputError && <Error>{inputError}</Error> }
        <Repositories>
            {repositories.map(repository => (
            <Link
                key={repository.cpf}
                to={{
                pathname: `/repositories/${repository.cpf}`,            
                }}
            >
                <div>
                    <strong>{repository.full_name}</strong>
                    <p>CPF: {repository.cpf} | Data de nascimento: {repository.birthday}</p>
                </div>
                <FiChevronRight height={20}/>
            </Link>
            ))}
        </Repositories>
        
        </>
    );
};

export default Dashboard;
