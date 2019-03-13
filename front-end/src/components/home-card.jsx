import React from 'react'

const HomeCard = (props) => {
    const { title, btnTitle, description, route } = props

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={route} className="btn btn-primary">{btnTitle}</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCard