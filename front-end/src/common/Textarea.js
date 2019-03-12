import React from 'react'

const Textarea = (props) => {
    const { name, placeholder, className, cols, rows, onChange } = props

    return (
        <div className="form-group">
            <textarea name={name} rows={rows} cols={cols} className={className} placeholder={placeholder} onChange={onChange} ></textarea>
        </div>
    )
}

export default Textarea