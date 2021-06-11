import PropTypes from 'prop-types'

export default function RecordItem({ record }) {
    return (
        <div>
            <div>Amount: &#8369; {record.amount}</div>
            <div>{record.category.name}</div>
            <p>{record.type}</p>
        </div>
    )
}

RecordItem.propTypes = {
    record: PropTypes.object.isRequired,
}