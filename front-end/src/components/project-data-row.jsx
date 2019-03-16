import React from 'react'
import DeleteComponent from './delete'

const ProjectDataRow = (props) => {
    const { id, name, startDate, endDate, status, description, employees } = props.data
    console.log(employees)

    return (
        <tr>
            <td>{name}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>{status}</td>
            <td>
                <p>
                    {
                        employees
                            .map(e => { return e.name })
                            .join(', ')
                    }
                </p>
            </td>
            <td>{description}</td>
            {
                props.isAdmin
                &&
                < td >
                    <DeleteComponent id={id} name="project" />
                </td>
            }
        </tr>
    )
}

export default ProjectDataRow