import { Card } from "react-bootstrap"

export default function SummaryCard({ content, desc, icon, textColor = ''}) {
    return (
        <Card className="shadow">
            <Card.Body>
                <div className="d-flex">
                    <div>
                        <p>&#8369; {content}</p>
                        <small>{desc}</small>
                    </div>
                    <div className={`ms-auto align-self-center ${textColor}`}>
                        <h1>
                            <i className={icon}></i>
                        </h1>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}
