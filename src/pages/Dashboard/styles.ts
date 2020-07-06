import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      button {
        background: transparent;
        border: none;
        color: #FF872C;
        font: 18px "Poppins", bold;

        
      }
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
     
      

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }

      button {
        background: transparent;
        border: none;
        color: red;
        display: flex;
        align-items: center;

        & :hover{
          color: #800000;

        }
      }

      svg {
        margin-left: 15px;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const Form = styled.section`
  background: transparent;
  font: 16px "Poppins", sans-serif;
  color: #363F5F;

 

  section {
    display: flex;
    flex-direction: row;
    text-align: left;
    

    p {
    margin-left: 10px;
    }

    select {
    width: 200px;
    background: #fff;
    border-radius: 6px;
    height: 40px;
    margin-left: 10px;
    margin-top: 5px;
    font: 14px "Poppins", bold;
    padding-left: 10px;
  }
    input {
      border: none;
      padding-left: 10px;
      width: 200px;
    background: #fff;
    border-radius: 6px;
    height: 40px;
    margin-left: 10px;
    margin-top: 5px;
    }
  }

  button {
    margin-top: 20px;
    border-radius: 5px;
    background: #FF872C;
    border: none;
    padding: 10px;
    color: #FFF;
    font: 16px "Poppins", bold;
  }



  

`
