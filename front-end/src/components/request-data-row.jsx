import React from 'react'

const RequestDataRow = (props) => {
    const { from, to, requestType, description, isApproved } = props.data
    debugger
    return (
        <tr>
            <td>{from}</td>
            <td>{to}</td>
            <td>{requestType}</td>
            <td>{description}</td>
            {
                isApproved
                    ? <td className="text-success">True</td>
                    : <td className="text-danger">False</td>
            }
            <td>
                <a className="btn btn-danger disabled" role="button">Delete</a>
            </td>
        </tr>
    )
}

export default RequestDataRow