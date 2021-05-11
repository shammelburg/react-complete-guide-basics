import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false)
    const onFormToggle = () => {
        setShowForm(prevState => !prevState)
    }
    return (
        <div className="new-expense">
            {showForm && <ExpenseForm onAddExpense={onAddExpense} onShowFormToggle={onFormToggle} />}
            {!showForm && <button onClick={onFormToggle}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense
