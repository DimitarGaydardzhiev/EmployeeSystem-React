import React from 'react'
import DeleteComponent from './delete'
import RequestApprovalComponent from './request-approval'

const RequestDataRow = (props) => {
    const { user, from, to, requestType, description, isApproved, id } = props.data

    return (
        <tr>
            <td>{user}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{requestType}</td>
            <td>{description}</td>
            {
                isApproved
                    ? <td className="text-success">True</td>
                    : <td className="text-danger">False</td>
            }
            {
                props.hasApprovalOptions == 'true'
                    ?
                    <td>
                        <RequestApprovalComponent id={id} name="request" isApproved={isApproved} />
                    </td>
                    :
                    <td></td>
            }
            {
                props.canDelete == 'true'
                    ?
                    <td>
                        <DeleteComponent id={id} name="request" />
                    </td>
                    :
                    <td></td>
            }
        </tr>
    )
}

export default RequestDataRow