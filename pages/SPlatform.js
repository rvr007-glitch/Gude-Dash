import React from 'react'
import Cardp from '../components/cardp'

export const Platform = () => {
    return (
        <div className="parent">
            <Cardp imgp="leetcode.png" title="Leet Code" tag="Placement Oriented" />
            <Cardp imgp="Hacker.jpg" title="Hacker Rank" tag="Placement Oriented" />
            <Cardp imgp="GFG.jpg" title="Geeks For Geeks" tag="Placement Oriented" />
            <Cardp imgp="Codec.jpg" title="CodeChef" tag="Placement Oriented" />
            <Cardp imgp="Codef.jpg" title="CodeForces" tag="Placement Oriented" />
            <Cardp imgp="IB.png" title="Interview Bit" tag="Placement Oriented" />
        </div>
    )
}
