import { Spinner } from "react-bootstrap"

export default function Loading() {
    return (
        <div className="loading">
            <div>
                <Spinner animation="border"></Spinner> Loading             
            </div>
        </div>
    )
}
