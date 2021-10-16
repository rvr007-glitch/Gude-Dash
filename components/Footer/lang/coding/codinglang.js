import React from 'react'
import "./codelang.css"

import CodeCard from "../coding/codingcard"

const Codinglang = () => {
    return (
        <div className="codingcontainer">
            <div className="heading head">
                <h1 className="ctittle">Coding Languanges</h1>
            </div>
            <div className="lang-cards">
                <CodeCard />
            </div>
        </div>
    )
}

export default Codinglang
