import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.img} className="card--img" alt={props.alt} />
            <div className="card--text-container">
                <div className="location-container">
                    <h2 className="card--location"><i className="fa-sharp fa-solid fa-location-dot card--icon"></i>{props.location}</h2>
                    <a href={props.url} className="card--map" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <span className="card--date">{props.startDate}{props.endDate && <span className="card--date">- {props.endDate}</span>}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}


