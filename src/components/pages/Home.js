import { Container, Row, Col, Card } from "react-bootstrap"
import numberPriceFormat from "../../utils/numberPriceFormat"

export default function Home() {
    let currentMonthTotalIncome = 12354.988
    let currentMonthTotalExpenses = 4523.00
    return (
        <Container>
            <Row>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div>
                                    <p>&#8369; {numberPriceFormat(currentMonthTotalIncome)}</p>
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
                                    <p>&#8369; {numberPriceFormat(currentMonthTotalExpenses)}</p>
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
                                        <p>&#8369; {numberPriceFormat(currentMonthTotalIncome - currentMonthTotalExpenses)}</p>
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
