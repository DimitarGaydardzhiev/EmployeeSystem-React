import React from 'react'
import { Link } from 'react-router-dom'
import DeleteComponent from './delete'

const AdministrationDataRow = (props) => {
    const { name, employeesCount, id } = props.data
    let className = employeesCount > 0 ? 'disabled' : ''
    let disabled = employeesCount > 0 ? true : false

    return (
        <tr>
            <td>{name}</td>
            <td>{employeesCount}</td>

            {
                props.isAdmin ?
                    <td>
                        <Link className={"btn btn-warning " + className} to={{
                            pathname: `/${props.tableType}/${id}`,
                            state: { data: props.data }
                        }}>Edit</Link>
                    </td>
                    :
                    <td></td>
            }

            {
                props.isAdmin ?
                    <td>
                        <DeleteComponent id={id} name={props.deleteController} disabled={disabled} />
                    </td>
                    :
                    <td></td>
            }

        </tr>
    )
}

export default AdministrationDataRow