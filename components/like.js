import React, { useEffect, useState } from 'react'
import { FcLikePlaceholder } from "react-icons/fc"
import { FaHeart } from 'react-icons/fa'
import "../comments/star.css"

const Like = () => {
    const getrateLocalItems = () => {
        let rate = parseInt(localStorage.getItem('rate'));
        console.log(rate);
        if (rate) {
            return rate;
        }
        else {
            return 0;
        }
    }

    const getCountLocalItems = () => {
        let count = parseInt(localStorage.getItem('count'));
        console.log(count);
        if (count) {
            return parseInt(localStorage.getItem('count'));
        }
        else {
            return 0;
        }
    }

    const incNum = () => {
        setCount(count + 1)
    }
    const [rating, setRating] = useState(getrateLocalItems());
    const [count, setCount] = useState(getCountLocalItems());
    const [hover, setHover] = useState(null);
    useEffect(() => {

        localStorage.setItem("rate", JSON.stringify(rating))
    }, [rating]);
    useEffect(() => {
        console.log("counting")

        localStorage.setItem("count", JSON.stringify(count))
    });
    return (
        <div>

            {[...Array(1)].map((star, i) => {
                const ratingValue = i + 1;
                return <label><input type="radio" name="rating"
                    onClick={function (event) {
                        (setRating(ratingValue));
                        incNum()
                    }
                    }


                /><FaHeart size={20} className="star" color={ratingValue <= (hover || rating) ? "#f32d1c" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}

                    /></label>

            })}
            <div className="counter" color={"white"}>{count}</div>
        </div>
    )
}

export default Like
