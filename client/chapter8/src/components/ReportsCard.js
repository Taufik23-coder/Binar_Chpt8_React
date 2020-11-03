import React from 'react'

const Cards = (props) => {
    return (
        <div className="card card-default reports-card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">{props.int}</div>
        </div>
    )
}

export default Cards;