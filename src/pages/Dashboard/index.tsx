import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { FiTrash,} from 'react-icons/fi'
import api from '../../services/api';
import Modal from 'react-modal'
import Header from '../../components/Header';
import NumberFormat from 'react-number-format';

import formatValue from '../../utils/formatValue';
import { Container, CardContainer, Card, TableContainer, Form, Carde} from './styles';


interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);
  const [title, setTitle] = useState<string>()
  const [value, setValue] = useState<string>()
  const [category, setCategory] = useState<string>()
  const [type, setType] = useState<string>('income')
  const [inputError, setInputError] = useState('');


 


  useEffect(() => {
    async function loadTransactions(): Promise<void> {

      const response = await api.get('/transactions')

      const balanceFormatted = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total)
      }

      const transactionsFormatted = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString('pt-br')
        })
      )

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted)

    }

    loadTransactions();
  }, []);

    async function updateTransactions(): Promise<void> {
      const response = await api.get('/transactions')

      const balanceFormatted = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total)
      }
      const transactionsFormatted = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString('pt-br')
        })
      )

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);

    }


 async function deleteTransaction(id: string): Promise<void> {
    await api.delete(`/transactions/${id}`)
    const attTransa = transactions.filter(transaction => transaction.id !== id);
    updateTransactions()
    setTransactions(attTransa);    

  }


  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault()
    const data = {
        title,
        value,
        category,
        type,
    }
    try {
      const response = await api.post('/transactions', data)
      const aux = response.data;
      setTransactions ([...transactions, aux])
      updateTransactions()
      setIsOpen(false)
      setTitle('')
      setValue('')
      setCategory('')
    } catch (err) {
      setInputError('You dont have enough balance!')
    }
  }

  const customStyles = {
   
    content : {
      height: '300px',
      width: '600px',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      transition:  'width 2s, height 2s, transform 2s',
      background            :  'rgba(252, 255, 245, 0.68)',
      padding:  '30px',
      borderRadius: '20px',
      margin                : 'transparent',
      outline: 'none',
      border: 'transparent',
      overflow: 'hidden',
      color: 'black', 'text-align': 'center',
       
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      },
    overlay : {
        background            :  'rgba(0, 0, 0, 0.80)',
        margin                : 'transparent',
        overflow: 'hidden',
        outline: 'none',
        color: '#fff',
    },

  };

  const customStyles2 = {
   
    content : {
      height: '300px',
      width: '600px',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      transition:  'width 2s, height 2s, transform 2s',
      background            :  'rgba(252, 255, 245, 245)',
      padding:  '30px',
      borderRadius: '20px',
      margin                : 'transparent',
      outline: 'none',
      border: 'transparent',
      overflow: 'hidden',
      color: '#FF872C', 'text-align': 'center',
       
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      },
    overlay : {
        background            :  'rgba(0, 0, 0, 0,02)',
        margin                : 'transparent',
        overflow: 'hidden',
        outline: 'none',
        color: '#fff',
    },

  };

  

function closeModal(){
  setIsOpen(false);
}

  return (
  <>
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Money Deposit</p>
              <img src={income} alt="Income" />
            </header>
  <h1 data-testid="balance-income">{balance.income}</h1>
          </Card>
          <Card>
            <header>
              <p>Cash Withdrawal</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{balance.outcome}</h1>
          </Card>
          <Carde total>
            <header>
              <p>Balance</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{balance.total}</h1>
          </Carde>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Value</th>
                <th>Category</th>
                <th>Date</th>
                <th>
                  <button onClick={() => {
                    setIsOpen(true);
                }}>New</button></th>
              </tr>
            </thead>

            <tbody>
            {transactions.map(transaction => (
                <tr key={transaction.id}>
                <td className="title">{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'outcome' && ' - '}
                  {transaction.formattedValue}
                  </td>
                <td>{transaction.category.title}</td>
            <td>{transaction.formattedDate}</td>
            <td>
              <button onClick={() => {deleteTransaction(transaction.id)}}>
              <FiTrash size={20}></FiTrash></button></td>
              </tr>
            ))}
             
            </tbody>
          </table>
        </TableContainer>
      </Container>

      
      {inputError && <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {closeModal()}}
      style={customStyles2}

      contentLabel="Modal"
      >{inputError}
      
      </Modal>}

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >

           
        <Form>
              <h1>New Transaction</h1>
              <form onSubmit={handleSubmit}>
              <section>
              <div>
                <p>Title</p>
                <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                ></input>
              </div>
              <div>
                <p>Value</p>
                <NumberFormat 
                value={value}
                onChange={e => {
                const aux = e.target.value
                const num_array = aux.split(',');
                const num_string = num_array.join('');  
                setValue(num_string)
              }}
                thousandSeparator={true} 
                placeholder='US$'

                ></NumberFormat>
              </div>
              </section>
              <section>
              <div>
                <p>Category</p>
                <input
                value={category}
                onChange={e => setCategory(e.target.value)}
                ></input>
              </div>
              <div>
                <p>Type</p>
                <select
                value={type}
                onChange={e => setType(e.target.value)}
                >
                  <option value="income">Income</option>
                  <option value="outcome">Outcome</option>
                </select>
              </div>
              </section>
              <button type="submit">
                Create
              </button>
              </form>                          
        </Form>
        
        </Modal>
    </>

  );
};

export default Dashboard;
