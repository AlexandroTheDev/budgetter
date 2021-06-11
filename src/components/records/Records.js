import { useContext } from "react"
import { RecordContext } from "../../context/RecordContext"
import RecordItem from "./RecordItem"
import RecordForm from "./RecordForm"


export default function Records() {
    const recordContext = useContext(RecordContext)
    const {records} = recordContext
    return (
        <>
            <RecordForm />
            {records.map( record => (
                <RecordItem key={record.id} record={record} />
            ))}
        </>
    )
}
