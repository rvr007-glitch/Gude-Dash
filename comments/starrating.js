import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa"
import "./star.css"

function Starrating() {
    const getrateLocalItems = () => {
        let rate = localStorage.getItem('rate');
        console.log(rate);
        if (rate) {
            return localStorage.getItem('rate');
        }
        else {
            return null;
        }
    }
    const [rating, setRating] = useState(getrateLocalItems);
    const [hover, setHover] = useState(null);

    useEffect(() => {

        localStorage.setItem("rate", JSON.stringify(rating))
    }, [rating]);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return <label><input type="radio" name="rating"
                    onClick={() => (setRating(ratingValue))}

                /><FaStar size={20} className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}

                    /></label>
            })}

        </div>
    )
}

export default Starrating
