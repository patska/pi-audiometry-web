import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  
  .deleteRepository {
        width: 130px;
        height: 40px;
        background: #f55d79;
        border: 0;
        font-size:14px;
        border-radius: 0px 5px 5px 5px;
        color: #fff; 
        font-weight: bold; 
        transition: background-color .2s;
        color: #3a3a3a;

        &:hover {
            background: ${shade(0.2, '#f55d79')}
        }
    }
    
    .editRepository {
        width: 130px;
        height: 40px;
        background: #f7ff59;
        margin-right: 8px;
        border: 0;
        font-size:14px;
        border-radius: 0px 5px 5px 5px;
        color: #fff; 
        font-weight: bold; 
        transition: background-color .2s;
        color: #3a3a3a;

        &:hover {
            background: ${shade(0.2, '#f7ff59')}
        }
    }

    .startAudiometry {
        width: 276px;
        margin-top: 10px;
        
        height: 40px;
        background: #89f781;
        margin-right: 8px;
        border: 0;
        font-size:14px;
        border-radius: 0px 5px 5px 5px;
        color: #fff; 
        font-weight: bold; 
        transition: background-color .2s;
        color: #3a3a3a;

        &:hover {
            background: ${shade(0.2, '#89f781')}
        }
    }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Title = styled.h1`
    font-size: 28px;
    color: #3a3a3a;
    margin-top: 80px;
    max-width: 450px; 
    line-height: 56px;
`;
export const Repositories = styled.div`
    margin-top: 20px;
    max-width: 700px;
    height: 1000px;
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


export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
    div {
      margin: 0 16px;
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
      color: #cbcbd6;
    }
  }
`;