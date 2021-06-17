import moment from "moment"
import { useEffect } from "react"
import { useContext, useState } from "react"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import { RecordContext } from "../../contexts/record/RecordContext"
import numberPriceFormat from "../../utils/numberPriceFormat"

export default function Home() {
    const { records, isLoading, getRecords } = useContext(RecordContext)

    const [summary, setSummary] = useState({
        currentMonthTotalIncome: 0,
        currentMonthTotalExpenses :0
    })

    useEffect(() => {
        setSummary({
            currentMonthTotalIncome : records.filter( record => record.type === 'income' && moment(new Date()).format('MM') === moment(record.date).format('MM')).reduce( (x,y) => x + y.amount, 0 ),
            currentMonthTotalExpenses : records.filter( record => record.type === 'expense' && moment(new Date()).format('MM') === moment(record.date).format('MM')).reduce( (x,y) => x + y.amount, 0 )
        })
    },[records])

    useEffect(() => {
        console.log("test")
        getRecords()
    }, [])

    return (
        isLoading ?
        <><Spinner animation="border"></Spinner> Loading </>
        :
        <Container>
            <Row>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div>
                                    <p>&#8369; {numberPriceFormat(summary.currentMonthTotalIncome)}</p>
                                    <small>This Month Income</small>
                                </div>
                                <div className="ml-auto align-self-center">
                                    <h1>
                                        <i className="las la-hand-holding-usd"></i>
                                    </h1>
                                </div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div>
                                    <p>&#8369; {numberPriceFormat(summary.currentMonthTotalExpenses)}</p>
                                    <small>This Month Expenses</small>
                                </div>
                                <div className="ml-auto align-self-center">
                                    <h1>
                                        <i className="las la-file-invoice-dollar"></i>
                                    </h1>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                    <Card>
                        <Card.Body>
                                <div className="d-flex">
                                    <div>
                                        <p>&#8369; {numberPriceFormat(summary.currentMonthTotalIncome - summary.currentMonthTotalExpenses)}</p>
                                        <small>Budget Left</small>
                                    </div>
                                    <div className="ml-auto align-self-center">
                                        <h1>
                                            <i className="las la-coins"></i>
                                        </h1>
                                    </div>
                                </div>
                                
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
