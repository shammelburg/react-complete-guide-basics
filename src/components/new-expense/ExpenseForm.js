import React, { useState } from 'react'

import './ExpenseForm.css'


const defaultState = {
    id: 0,
    title: '',
    price: 0,
    date: '2019-01-01'
}

const ExpenseForm = ({ onAddExpense, onFormToggle }) => {

    const [form, setForm] = useState(defaultState)

    const changeHandler = e => setForm(prevState => {
        return { ...prevState, [e.target.name]: e.target.value }
    })

    const submitHandler = e => {
        e.preventDefault();

        if (!form.title || !form.price || !form.date) {
            return false
        }

        // set types
        form.date = new Date(form.date)
        form.price = +form.price

        onAddExpense(form)
        setForm(defaultState)
        onFormToggle()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" value={form.title} onChange={changeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Cost</label>
                    <input type="number" min="0.01" step="0.01" name="price" value={form.price} onChange={changeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" name="date" value={form.date} onChange={changeHandler} required />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={() => onFormToggle()}>
                    Cancel
                </button>
                <button type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm
