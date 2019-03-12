import React from 'react'

const Button = (props) => {
    const { type, value, className } = props

    return (
        <div className="form-group">
            <button type={type} className={className}>{value}</button>
        </div>
    )
}

export default Button