import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './components/Form'

interface IExpense {
  id: number,
  name: string,

  amount: number
}
const initialExpenses = [
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
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {/* Input Form */}
      {/* Form и ExpenseCard */}
      <Form />
      <div className="total">Total: $42.50</div>
      {/* Expense List */}
      <div className="expense">
        <div>
          Lunch
          <div className="category">Food</div>
        </div>
        <div className="amount">$12.50</div>
      </div>
      <div className="expense">
        <div>
          Bus Ticket
          <div className="category">Transport</div>
        </div>
        <div className="amount">$5.00</div>
      </div>
      <div className="expense">
        <div>
          Movie
          <div className="category">Fun</div>
        </div>
        <div className="amount">$25.00</div>
      </div>
    </div>

  )
}

export default App
