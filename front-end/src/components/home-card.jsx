import React from 'react'

const HomeCard = (props) => {
    const { title, btnTitle, description, route, isLoggedIn } = props

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {
                        isLoggedIn
                        ?
                        <a href={route} className="btn btn-primary">{btnTitle}</a>
                        :
                        <a href={route} className="btn btn-primary disabled">{btnTitle}</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeCard