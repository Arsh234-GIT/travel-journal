import React, { Component } from "react";



const Boxes = (props)=>{
    console.log(props);

        return (

            <div className="place-container">
                <div className="left-container">
                    <img className="image-fuji"  src={`..Images/${props.image}`}/>
                </div>
                <div className="right-container">
                    <div className="location">
                    <img className="image-location"  src="../Images/PLACEHOLDER.png"/>
                    <span className="loc-name">{props.locat}</span>
                    <a className="map-link" href={props.Googlemap}>view on Google Maps</a>

                    </div>
                  
                    <div className="heading-part">
                        <h2 className="font-mount">{props.title}</h2>
                        

                    </div>
                    <div className="content-part">
                        <h4 className="dates">{props.sdate}-{props.edate}</h4>
                        
                        <p className="description">{props.description}</p>

                    </div>
                </div>
            </div>
            

        )
    }

export default Boxes