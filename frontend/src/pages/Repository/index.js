import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import LoadingOverlay from 'react-loading-overlay';
import Chart from "react-apexcharts";
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import logoImg from '../../assets/github-logo.svg';

import { Header, RepositoryInfo, Issues, Title, Repositories } from './styles';


const Dashboard = (full_name) => {
  const [setRepository] = useState();
  const [exam, setExam] = useState();
  const [isActive, setIsActive] = useState();
  const [repository, setRepositories] = useState(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  function filterIt(arr, searchKey) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        return obj[key].includes(searchKey);
      })
    });
  }

  function removeRepository() {
    const r = window.confirm("Deletar paciente?");
    if (r == true) {

      repository.forEach(function (item, i) {
        if (item.cpf == currentObject[0].cpf) {
          repository.splice(i, 1);
          localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repository));
          window.location.href = window.location.origin;
        }
      });
    }
  }

  function startAudiometry() {
    const r = window.confirm("Começar a audiometria?\n[Atenção] Verificar se audiometro está conectado antes de iniciar.");
    if (r == true) {
      setIsActive(true);
      api.get(`/audiometry`).then(response => {
        console.log(response.data);
        currentObject[0].exams.push(response.data);
        console.log("currentObject: ", currentObject);
        repository.forEach(function (item, i) {
          if (item.cpf == currentObject[0].cpf) {
            item = currentObject[0];
            localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repository));
          }
        });
        setIsActive(false);
        window.location.reload(false);
      });
    }
  }


  const [issues, setIssues] = useState([]);
  const { params } = useRouteMatch();
  const value = full_name.location.pathname.split("/");
  const currentObject = filterIt(repository, value[value.length - 1]);
  console.log(currentObject);

  function printDate(time){
    var date = new Date(Number(time));
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
  }

  return (

    <>
      <LoadingOverlay
        active={isActive}
        spinner
        text='Realizando audiometria...'
      >
        <Header>
          <img src={logoImg} alt="GitHub Explorer" />
          <Link to="/">
            <FiChevronLeft size={16} />
          Voltar
        </Link>
        </Header>

        {repository && (
          <RepositoryInfo>

            <header>
              <div>
                <strong>{currentObject[0].full_name}</strong>
                <p>CPF: {currentObject[0].cpf} | Data de nascimento: {currentObject[0].birthday}</p>
                <br></br>
                <button className="editRepository" onClick={removeRepository}>Editar paciente</button>
                <button className="deleteRepository" onClick={removeRepository}>Deletar paciente</button>
              </div>
            </header>
            <button className="startAudiometry" onClick={startAudiometry}>Realizar audiometria</button>

            <Title>Exames realizados</Title>

            {currentObject[0].exams.map(repository => (


              <div className="mixed-chart">
                <Accordion allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Exame número: {repository[2].examDate} | Data de realização: {printDate(repository[2].examDate)}
                    </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <h3>Ouvido esquerdo</h3>
                      <Chart
                        options={{
                          chart: {
                            id: "basic-bar"
                          },
                          xaxis: {
                            categories: [2000, 4000, 6000, 8000, 500, 250],
                            title: {
                              text: 'Frequência (Hz)'
                            }
                          }
                        }}
                        series={[
                          {
                            name: "Resultado",
                            data: [repository[0][0][1], repository[0][1][1], repository[0][2][1], repository[0][3][1], repository[0][4][1], repository[0][5][1]]
                          }
                        ]}
                        type="line"
                        width="500"
                      />
                      <h3>Ouvido direito</h3>
                      <Chart
                        options={{
                          chart: {
                            id: "basic-bar"
                          },
                          xaxis: {
                            categories: [2000, 4000, 6000, 8000, 500, 250],
                            title: {
                              text: 'Frequência (Hz)'
                            }
                          }
                        }}
                        series={[
                          {
                            name: "Resultado",
                            data: [repository[1][0][1], repository[1][1][1], repository[1][2][1], repository[1][3][1], repository[1][4][1], repository[1][5][1]]
                          }
                        ]}
                        type="line"
                        width="500"
                      />
                      Download PDF:
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}

          </RepositoryInfo>
        )}
      </LoadingOverlay>



    </>
  );
};

export default Dashboard;