import React from 'react'

const Input = (props) => {
    const { type, name, value, label, onChange, placeholder, className } = props

    return (
        <div className='form-group'>
            <label
                htmlFor={name}>
                {label}
            </label>
            <input
                className={className}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    )
}

export default Input