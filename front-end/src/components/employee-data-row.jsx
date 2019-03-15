import React from 'react'
import DeleteComponent from './delete'

const EmployeeDataRow = (props) => {
    const { firstName, lastName, position, birthday, startingDate, department, description, id } = props.data
    
    return (
        <tr>
            <td>{firstName} {lastName}</td>
            <td>{position}</td>
            <td>{birthday}</td>
            <td>{startingDate}</td>
            <td>{department}</td>
            <td>{description}</td>
            {
                props.isAdmin
                    ?
                    < td >
                        <DeleteComponent id={id} name="employee" />
                    </td>
                    :
                    <td></td>
            }
        </tr>
    )
}

export default EmployeeDataRow