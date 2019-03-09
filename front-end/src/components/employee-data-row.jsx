import React from 'react'

const EmployeeDataRow = (props) => {
    const { firstName, lastName, position, birthday, startingDate, department, description } = props.data
    return (
        <tr>
            <td>{firstName} {lastName}</td>
            <td>{position}</td>
            <td>{birthday}</td>
            <td>{startingDate}</td>
            <td>{department}</td>
            <td>{description}</td>
            <td>
                <a className="btn btn-danger disabled" role="button">Delete</a>
            </td>
        </tr>
    )
}

export default EmployeeDataRow