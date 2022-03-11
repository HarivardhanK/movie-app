import React from "react";
import placeholder from './placeholder.jpg'
const Card=({movie})=>{
    return (
    <>
        <div className="card" style={{width:"18rem", color:'black'}}>
        <img src={movie.Poster!='N/A'?movie.Poster:placeholder} className="card-img-top" alt="" />
        <div className="card-body">
        <p className="card-text">{movie.Title}</p>
        <p className="card-text">{movie.Year}</p>
        </div>
        </div>
    </>
    )
}

export default Card;