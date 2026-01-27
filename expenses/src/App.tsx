import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {/* Input Form */}
      {/* Form и ExpenseCard */}
      <div className="form">
        <input type="text" placeholder="Expense title" />
        <input type="number" placeholder="Amount" />
        <select>
          <option value="">Select category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Fun</option>
        </select>
        <button>Add Expense</button>
      </div>
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
