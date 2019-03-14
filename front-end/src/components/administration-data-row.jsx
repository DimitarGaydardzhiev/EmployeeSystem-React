import React from 'react'
import { Link } from 'react-router-dom'

const AdministrationDataRow = (props) => {
    const { name, employeesCount, id } = props.data

    return (
        <tr>
            <td>{name}</td>
            <td>{employeesCount}</td>
            <td>
                <Link className="btn btn-warning" to={{
                    pathname: `/departments/${id}`,
                    state: {data: props.data }
                }}>Edit</Link>
            </td>
        </tr>
    )
}

export default AdministrationDataRow