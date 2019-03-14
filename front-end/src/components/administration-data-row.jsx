import React from 'react'
import { Link } from 'react-router-dom'
import DeleteComponent from './delete'

const AdministrationDataRow = (props) => {
    const { name, employeesCount, id } = props.data

    return (
        <tr>
            <td>{name}</td>
            <td>{employeesCount}</td>
            <td>
                <Link className="btn btn-warning" to={{
                    pathname: `/${props.tableType}/${id}`,
                    state: { data: props.data }
                }}>Edit</Link>
            </td>
            <td>
                <DeleteComponent id={id} name={props.deleteController}/>
            </td>
        </tr>
    )
}

export default AdministrationDataRow