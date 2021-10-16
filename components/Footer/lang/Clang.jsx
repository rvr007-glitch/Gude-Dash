import React, { Component, createContext } from "react"
import Card from "../../cards/text-cards"

import "../lang/c.css"
import Bar from "../../../components/chart"
import Foot from "../FooterBtn"
class Clang extends Component {

    render() {
        return (
            <div className="c-container">
                <div className="heading">
                    <h1 className="ctittle">C-Lang</h1>
                </div>
                <div className="langtittle">
                    <h1>Why C?</h1>
                </div>
                <div className="desccard"><Card para={`Learning C has a similar benefit.
                 If the person had learned driving on a manual car,
                  he could have easily driven the automatic car as well.
                   Similarly, if a person learns C programming first, it will help him 
                   
                   to learn any modern programming language as well. As learning C help to understand
                    a lot of underlying architecture of operating system. Like, pointers, working with 
                    memory locations etc. It will Be the Most Used Languamnge in College. So Can't Ignore C..  `} /></div>

                <div className="secondary">
                    <div className="btns software"> <a className="a" href="/cpsoftware">Softwares</a></div>
                    <div className="practice">
                        <h3>Practice Here</h3>
                        <div className="logo-container">

                            <a className="hrank" href="https://www.hackerrank.com/domains/c"><img className="hrlogo" src="https://i.ibb.co/6bQjGLd/clang.png" alt="" srcset="" /></a>
                            <a href="https://www.codechef.com/problems/easy"> <img className="codcheflogo" src="https://i.ibb.co/djBQ1Hf/codechef.png" alt="" srcset="" /></a>
                        </div>
                    </div>

                </div>
                <div className="gotStuck">
                    <h1 className="stuck">Got Stuck!!!</h1>
                    <div className="supportcontainer">
                        <a href="https://www.youtube.com/watch?v=9-GSIN8s5Eo&list=PLu0W_9lII9ahSEQv6cHtu8JBXNgK2_QMX"><img className="support yt" src="https://i.ibb.co/5YYcN6R/yt-logo.jpg" alt="" srcset="" /></a>
                        <a href="https://stackoverflow.com/questions/tagged/c"><img className="support stack" src="https://i.ibb.co/s2vj3v5/Stack-Overflow-logo.png" alt="" srcset="" /></a>
                        <a href="https://www.geeksforgeeks.org/c-programming-language/"> <img className="support gfg" src="https://i.ibb.co/bs1CH6G/gfg.jpg" alt="" srcset="" /></a>

                       <a href="./resources"> <img className="support docs" src="https://i.ibb.co/f28c9R6/Google-Docs-logo-2014-2020-svg.png" alt="" srcset="" /></a>
                    </div>
                </div>
                <div className="moderate">
                    <h1 className="med">Not A beginner!!</h1>
                    <div className="btns medioker"> <a className="a" href="#">Click Here!!!</a></div>
                </div>
                <div className="barclass">
                    <h1 className="bar-header">Role C in diffrent Fields </h1>
                    <Bar />

                </div>
                <div className="footer">
                    <Foot op={"https://youtu.be/ZSPZob_1TOk"} />

                </div>
            </div>







        );

    }
}

export default Clang;

