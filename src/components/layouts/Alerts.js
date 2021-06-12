import { useContext } from 'react'
import { AlertContext } from '../../contexts/alert/AlertContext'

export default function Alerts() {
    const {alerts} = useContext(AlertContext)
    console.log(alerts)

    return (
        alerts.length > 0 && alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`} >
                {alert.message}
            </div>
        ))
    )
}
