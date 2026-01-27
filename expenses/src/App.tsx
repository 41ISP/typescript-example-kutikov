import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form, type TCategory } from './components/Form'

interface IExpense {
  id: number,
  name: string,
  category: TCategory,
  amount: number
}

const initialExpenses: IExpense[] = [
  {
    id: Date.now(),
    name: "KFC",
    category: "food",
    amount: 15
  },
  {
    id: Date.now() + 1,
    name: "Netflix",
    category: "fun",
    amount: 19.99
  }
]

function App() {
  const [expenses, setExpenses] = useState<IExpense[]>(initialExpenses)
  
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {/* Input Form */}
      {/* Form и ExpenseCard */}
      <Form />
      <div className="total">Total: $42.50</div>
      {/* Expense List */}
      
    </div>

  )
}

export default App
