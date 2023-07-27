import React from "react";
import {Link} from "react-router-dom";

function OnePainting({name, price, url}) {
    return (
        <article className={"painting"}>
            <div>
                <img src={url} alt={name} />
            </div>
            <header>
                <h2>{name} - {price}€</h2>
                <Link to={`/paintings/${name}`}>
                    <button>
                        BUY
                    </button>
                </Link>
            </header>


        </article>
    )
}

export default OnePainting