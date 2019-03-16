import React from 'react'

const HomeCard = (props) => {
    const { title, btnTitle, description, route, img } = props

    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={route} className="btn btn-info">{btnTitle}</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCard