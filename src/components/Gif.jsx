import React from 'react'
import { Link } from "wouter";
import Fav from './Fav';

function Gif ({id, url}) {
    return(
        <div className="gif" key={id}>
            <div>
                <Fav id={id}></Fav>
            </div>
            <Link to={`/details/${id}`}>
            <img src={url} alt="gif"/>
            </Link>
        </div>
    )
}

export default React.memo(Gif)