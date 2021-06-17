import { useContext } from "react"
import { Button } from "react-bootstrap"
import { RecordContext } from "../../contexts/record/RecordContext"
import numberPriceFormat from "../../utils/numberPriceFormat"

export default function RecordListItem({record,handleShow}) {

    const { setCurrentRecord } = useContext(RecordContext)


    const handleEdit = () => {
        setCurrentRecord(record)
        handleShow()
    }

    return (
        <>
        <tr>
            <td>
                {new Date(record.date).toLocaleString([],{year: 'numeric', month: 'numeric', day: 'numeric'})}
            </td>
            <td>&#8369; {numberPriceFormat(record.amount)}</td>
            <td>{record.category.name}</td>
            <td>{record.type}</td>
            <td>
                <Button variant="outline-warning" size="sm"  onClick={handleEdit}>
                    <i className="las la-edit"></i>
                </Button>{" "}
                <Button variant="outline-danger" size="sm">
                    <i className="las la-trash"></i>
                </Button>
            </td>
        </tr>


        </>
    )
}
