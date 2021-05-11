import React, { useState } from 'react'
import Card from '../ui/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'


const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState('2020')
    const filterExpenses = (year) => setSelectedYear(year)
    const filteredExpenses = expenses.filter(s => s.date.toLocaleString().includes(selectedYear))

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onFilterExpenses={filterExpenses} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
