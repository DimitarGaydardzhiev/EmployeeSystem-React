import React from 'react'

const AdministrationDataRow = (props) => {
    const { name, employeesCount } = props.data
    return (
        <tr>
            <td>{name}</td>
            <td>{employeesCount}</td>
            <td>
                <a className="btn btn-warning disabled" role="button">Edit</a>
            </td>
        </tr>
    )
}

export default AdministrationDataRow