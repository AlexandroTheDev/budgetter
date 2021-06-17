import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Table, Spinner } from 'react-bootstrap'
import { RecordContext } from '../../contexts/record/RecordContext'
import RecordEditForm from './RecordEditForm'
import RecordListItem from './RecordListItem'

export default function RecordList() {

    const { records, getRecords, isLoading, currentRecord, clearCurrentRecord } = useContext(RecordContext)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        clearCurrentRecord()
    };
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        getRecords()
        // eslint-disable-next-line
    }, [])

    const displayRecords = records.map( record => <RecordListItem key={record._id} record={record} handleShow={handleShow} />)

    return (
        
        !isLoading ? <>
            <Table striped bordered hover size="sm" className="text-center" >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                        {records.length > 0 ?displayRecords : <tr><td colSpan="5">No Records Found</td></tr>}
                </tbody>
            </Table>
            { currentRecord && <RecordEditForm show={show} handleClose={handleClose}/> }
        </> :
        <>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> Loading
        </>
    )
}
