import React from 'react'
import { useContext } from 'react'
import { AlertContext } from '../../contexts/alert/AlertContext'

export default function Alert() {

    const {alerts} = useContext(AlertContext)

    return (
        alerts.length !== 0 && alerts.map( alert=> (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                {alert.message}
            </div>
        ))
    )
}
