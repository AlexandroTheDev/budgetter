import moment from 'moment'
import React from 'react'
import { useContext } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { RecordContext } from '../../contexts/record/RecordContext'
import { totalEachDayOfMonth, listOfDaysInMonth } from '../../utils/datasets'

export default function BudgetSummary() {

    const { records } = useContext(RecordContext)

    return (
        <Line 
            data={{
                labels: listOfDaysInMonth(moment(new Date()).format('YYYY'), moment(new Date).format('MM')),
                datasets: [
                    {
                        label: 'Expenses',
                        data : totalEachDayOfMonth(moment(new Date()).format('YYYY'), moment(new Date).format('MM'), records, 'expense'),
                        backgroundColor: '#507dbc',
                        borderColor: '#507dbc'
                    },
                    {
                        label : 'Income',
                        data : totalEachDayOfMonth(moment(new Date()).format('YYYY'), moment(new Date).format('MM'), records, 'income'),
                        backgroundColor: '#fa824c',
                        borderColor: '#fa824c'
                    }
                ]
            }}
            
            height={300}
            width={600}
            options={{
                maintainAspectRatio: false,
                aspectRatio: 1,
                scales: {
                    x: {
                        display:true,
                        title: {
                            display:true,
                            text: 'Day of the Month'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: "Money in PHP (₱)"
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: `${moment(new Date).format('MMMM')} Budget Data`
                    }
                }
            }}

        />
    )
}
