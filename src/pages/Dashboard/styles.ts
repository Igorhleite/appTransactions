import styled from 'styled-components';



interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 80px;
  padding: 60px 20px;
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


export const Carde = styled.div`
  background: ${props => props.theme.colors.secundary};
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
`


export const Card = styled.div`

  background: #fff;
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
    padding-top: -60px;
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: ${props => props.theme.colors.text};
      font-weight: normal;
      padding: 10px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      button {
        background: transparent;
        border: none;
        color: ${props => props.theme.colors.secundary};
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
        color: ${props => props.theme.colors.secundary};
        display: flex;
        align-items: center;

        & :hover{
          color: ${props => props.theme.colors.primary};

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
    border: none;
    height: 40px;
    margin-left: 10px;
    margin-top: 5px;
    color: #363F5F;
    font: 14px "Poppins", bold;
    padding: 0 10px 0 10px;
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
    color: #363F5F;

    }
  }

  button {
    margin-top: 20px;
    border-radius: 5px;
    background: ${props => props.theme.colors.secundary};
    border: none;
    padding: 10px;
    color: #FFF;
    font: 16px "Poppins", bold;
  }  
`
