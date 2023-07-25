import React from "react";

export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={props.data.imageUrl} className="card-img-src"/>
               
            </div>
            <div className="card-content">
                <div className="flex-row">
                    <div className="card-location">
                        <p><i className="fa fa-map-pin"/> {props.data.location}</p>
                    </div>
                    <div className="map-a">
                        <a href={props.data.googleMasUrl}>View on Google Map</a>
                    </div>
                </div>
                <h2 className="card-title">{props.data.title}</h2>
                <p className="font-12"><strong>{props.data.startDate} - {props.data.endDate}</strong></p>
                <p className="font-12">{props.data.description}</p>

            </div>
        </div>
    )
}