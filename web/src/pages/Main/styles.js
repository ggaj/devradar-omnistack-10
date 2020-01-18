import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  aside {
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;

    strong {
      font-size: 20px;
      text-align: center;
      display: block;
      color: #333;
    }

    form {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      .input-group {
        display: flex;
        justify-content: stretch;
        
        .input:first-child {
          margin-right: 5px;
        }
      }
      label {
        padding-top: 10px;
        color: #acacac;
        font-size: 16px;
      }

      .input {
        padding-top: 10px;
      }

      input {
        width:100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;

        &:focus {
          border-bottom: 1px solid #7d40e7;
        }
      }

      > button[type="submit"]{
        border: 0;
        margin-top: 30px;
        background: #7d40e7;
        border-radius: 2px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        transition: background 0.5s;

        &:hover{
          background: #6931ca;
        }
      }
    }
  }

  main {
    flex:1;
    margin-left: 30px;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      list-style: none;
    }
  }

  /* @media (max-width: 1000px){
    #app {
      flex-direction: column;
    }

    #app main {
      margin-left: 0;
      margin-top: 30px;
    }

    #app aside {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    main ul {
      grid-template-columns: 1fr;
    }    
  } */
`;
