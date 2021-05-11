import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const DATA = [
  {
    id: 1,
    date: new Date(2021, 5, 10),
    price: 110.50,
    title: 'DOGE Coin Investment'
  },
  {
    id: 2,
    date: new Date(2021, 6, 11),
    price: 535.99,
    title: 'LG Ultrawide Monitor'
  },
  {
    id: 3,
    date: new Date(2020, 9, 19),
    price: 4000,
    title: 'Omega Aqua Terra Watch 41mm'
  }
]

function App() {
  const [expenses, setExpenses] = useState(DATA)

  const formSubmit = expense => {
    expense.id = new Date().getTime()
    setExpenses(prevState => {
      return [...prevState, expense]
    })
  }



  return (
    <div>
      <NewExpense onAddExpense={formSubmit} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
