import React from "react";
import ReactDom from "react-dom";

// images
import VSCodeLogo from "../images/vsCode-logo.png";
import IntelliJ from "../images/IntelliJIDEA_icon.png";
import HackerrankLogo from "../images/hackerrank-logo.png";
import CodeChefLogo from "../images/codechef-logo.jpeg";
import CodeForcesLogo from "../images/codeforces-logo.jpeg";
import LeetCodeLogo from "../images/leetcode-logo.png";
import InterviewBitLogo from "../images/interviewbit-logo.jpeg";

function CPSoftwares() {
  return (
    <div className="dev">
      <h1 className="title-dev">
        Softwares Required for Competitive Programming
      </h1>
      <div className="h4-webdev-dev">
        <div className="section-1">
          <h3 className="text ide">IDE/ Editor<hr/></h3>
          <p className="text">
            <h4>For C/C++ </h4>
            <img
              className="front-end-logo-webdev-dev"
              src={VSCodeLogo}
              alt="VSCode-Logo"
            />
            <br />
            Visual Studio Code is a lightweight but powerful source code editor
            which runs on your desktop and is available for Windows, macOS and
            Linux. It comes with built-in support for JavaScript, TypeScript and
            Node.js and has a rich ecosystem of extensions for other languages
            (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET
            and Unity).
          </p>
          <a href="https://atom.io/">
            <button className="a">Download</button>
          </a>

          <p className="text">
            <h4> For Java</h4>
            <img
              className="front-end-logo-webdev-dev"
              src={IntelliJ}
              alt="IntelliJ-Logo"
            />
            <br />
            IntelliJ IDEA is an integrated development environment written in
            Java for developing computer software. It is developed by JetBrains,
            and is available as an Apache 2 Licensed community edition, and in a
            proprietary commercial edition. Both can be used for commercial
            development.
          </p>
          <a href="https://www.jetbrains.com/idea/">
            <button className="a">Download</button>
          </a>
        </div>
        <div className="section-1">
          <h3 className="text ide">Platforms for Practice<hr/></h3>
          <p className="text">
            <h4> For Beginners</h4>
            <img
              className="front-end-logo-webdev-dev"
              src={HackerrankLogo}
              alt="Hackerrank-Logo"
            />
            <br />
            IntelliJ IDEA is an integrated development environment written in
            Java for developing computer software. It is developed by JetBrains,
            and is available as an Apache 2 Licensed community edition, and in a
            proprietary commercial edition. Both can be used for commercial
            development.
          </p>
          <a  href="https://www.hackerrank.com/">
            <button className="a">Click Here</button>
          </a>
          <p className="text">
            <h4> For Moderate and Above</h4>
            <img
              className="front-end-logo-webdev-dev"
              src={CodeChefLogo}
              alt="Codechef-Logo"
            />
            <br />
            CodeChef is a competitive programming community of programmers from
            across the globe. CodeChef was started as an educational initiative
            in the year 2009 by Directi, an Indian software company.
            <br /> It is a platform where you can participate in contests and
            practice questions of different levels like Easy , Medium ,Hard. By
            participating in contests you can get stars and you will get 3 star
            ,4 start and so on.
          </p>
          <a href="https://www.codechef.com/">
            <button className="a">Click Here</button>
          </a>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={CodeForcesLogo}
              alt="Codeforces-Logo"
            />
            <br />
            Codeforces is a website that hosts competitive programming contests.
            It is maintained by a group of competitive programmers from ITMO
            University led by Mikhail Mirzayanov. Since 2013, Codeforces claims
            to surpass Topcoder in terms of active contestants. As of 2018, it
            has over 600,000 registered users.
            <br />
            It provides you a platform to practice questions on the basis of
            levels and participate in contests.After crossing certain levels you
            will get different badges like pupil, master , candidate master etc.
          </p>
          <a href="https://codeforces.com/">
            <button className="a">Click Here</button>
          </a>
          <p className="text">
            <h4> For Placement</h4>
            <img
              className="front-end-logo-webdev-dev"
              src={LeetCodeLogo}
              alt="Leetcode-Logo"
            />
            <br />
            LeetCode is a website where people–mostly software
            engineers–practice their coding skills. There are 800+ questions
            (and growing), each with multiple solutions. Questions are ranked by
            level of difficulty: easy, medium, and hard. Here questions which
            were asked in different companies are also present.
          </p>
          <a href="https://leetcode.com/">
            <button className="a">Click Here</button>
          </a>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={InterviewBitLogo}
              alt="Interviewbit-Logo"
            />
            <br />
            InterviewBit is a platform to learn skills that you need for
            technology jobs. It helps you polish your skills and get ready for
            the job, whether you are a fresh college graduate or a working
            professional.
          </p>
          <a href="https://www.interviewbit.com/">
            <button className="a">Click Here</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CPSoftwares;
