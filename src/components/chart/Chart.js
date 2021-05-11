import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'


const Chart = ({ dataPoints }) => {
    const maxValue = Math.max(...dataPoints.map(d => d.value))

    return (
        <div className="chart">
            {
                dataPoints.map(dataPoint => <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />)
            }
        </div>
    )
}

export default Chart
