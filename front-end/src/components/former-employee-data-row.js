import React from 'react'

const FormerEmployeeDataRow = (props) => {
    const { firstName, lastName, position, birthday, startingDate, department, description } = props.data
    return (
        <tr>
            <td>{firstName} {lastName}</td>
            <td>{position}</td>
            <td>{birthday}</td>
            <td>{startingDate}</td>
            <td>{department}</td>
            <td>{description}</td>
        </tr>
    )
}

export default FormerEmployeeDataRow