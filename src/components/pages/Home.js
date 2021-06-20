import moment from "moment"
import { useEffect } from "react"
import { useContext, useState } from "react"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import { Redirect } from "react-router"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { RecordContext } from "../../contexts/record/RecordContext"
import { todaySummary } from "../../utils/datasets"
import numberPriceFormat from "../../utils/numberPriceFormat"
import BudgetSummary from "../layouts/BudgetSummary"
import SummaryCard from "../layouts/SummaryCard"

export default function Home() {
    const { records, isLoading, getRecords } = useContext(RecordContext)
    const { isAuthenticated } = useContext(AuthContext)

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
        !isAuthenticated && !isLoading? <Redirect to="/login" /> :
        isLoading ?
        <><Spinner animation="border"></Spinner> Loading </>
        :
        <Container>
            <Row>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                    <SummaryCard 
                        content={numberPriceFormat(summary.currentMonthTotalIncome)}
                        desc="This Month's Income"
                        icon="las la-hand-holding-usd"
                        textColor="text-success"
                    />
                </Col>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                    <SummaryCard 
                        content={numberPriceFormat(summary.currentMonthTotalExpenses)}
                        desc="This Month's Expenses"
                        icon="las la-file-invoice-dollar"
                        textColor="text-danger"
                    />
                    
                </Col>
                <Col xs="12" sm="6" md="4" className="mx-auto mb-3">
                <SummaryCard 
                        content={numberPriceFormat(summary.currentMonthTotalIncome - summary.currentMonthTotalExpenses)}
                        desc="Budget Left"
                        icon="las la-coins"
                        textColor="text-info"
                    />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="8" className="mb-3">
                    <Card className="shadow p-1">
                        <BudgetSummary />
                    </Card>
                </Col>
                <Col>
                    <Row>
                        <Col xs='12' className="mb-3">
                            <SummaryCard 
                                content={todaySummary(records,'income')}
                                desc="Today's Income"
                                icon="las la-angle-double-up"
                                textColor="text-success"
                            />
                        </Col>
                        <Col xs='12' className="mb-3">
                            <SummaryCard 
                                content={todaySummary(records,'expense')}
                                desc="Today's Expense"
                                icon="las la-angle-double-down"
                                textColor="text-danger"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
