import React from 'react'
import Card from '../ui/Card'
import ExpenseDate from './ExpenseDate'

import './ExpenseItem.css'

const ExpenseItem = ({ date, title, price }) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">
                        £{price}
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem
