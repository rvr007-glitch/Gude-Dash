import React from "react";
import ReactDom from "react-dom";

// images
import VSCodeLogo from "../images/vsCode-logo.png";
import AtomLogo from "../images/atom-logo.jpeg";
import FigmaLogo from "../images/Figma-logo.png";
import GoogleFontLogo from "../images/googleFontsLogo.png";
import NodeJSLogo from "../images/node-js-logo.png";
import MongoDB from "../images/MongoDB-Logo.png";
import ReactJSLogo from "../images/ReactJS-logo.png";
import AngularLogo from "../images/angularlogo.png";

function WebSoftware() {
  return (
    <div className="dev">
      <h1 className="title-dev">Softwares Required for Web Development</h1>
      <div className="h4-webdev-dev">
        {/* IDE/Editors */}
        <div className="section-1">
          <h3 className="text">IDE/ Editor</h3>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={AtomLogo}
              alt="Atom-Logo"
            />
            <br />
            ATOM is a free and open-source text and source code editor for
            macOS, Linux, and Microsoft Windows with support for plug-ins
            written in JavaScript, and embedded Git Control. Developed by
            GitHub, Atom is a desktop application built using web
            technologies.Most of the extending packages have free software
            licenses and are community-built and maintained.
          </p>
          <a href="https://atom.io/">
            <button>Download</button>
          </a>
          <a href="https://www.youtube.com/watch?v=MlIzFUI1QGA">
            <button> Tutorial </button>
          </a>
          <br />
          <p className="text">
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
          <a href="https://code.visualstudio.com/download">
            <button>Download</button>
          </a>
          <br />
        </div>
        {/* Front-end Design */}
        <div className="section-1">
          <h3 className="text">For Front-End Design </h3>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={FigmaLogo}
              alt="Figma-Logo"
            />
            <br />
            Figma is a design platform for teams who build products together.
            Born on the Web, Figma helps teams create, share, test, and ship
            better designs from start to finish. Whether it’s consolidating
            tools, simplifying workflows, or collaborating across teams and time
            zones, Figma makes the design process faster, more efficient, and
            fun while keeping everyone on the same page.
          </p>
          <a href="https://www.figma.com/downloads/">
            <button>Click Here</button>
          </a>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={GoogleFontLogo}
              alt="GoogleFonts-Logo"
            />
            <br />
            Google Fonts is a font embedding service library. This includes free
            and open source font families, an interactive web directory for
            browsing the library, and APIs for using the fonts via CSS and
            Android.
          </p>
          <a href="https://fonts.google.com/">
            <button>Click Here</button>
          </a>
        </div>
        {/* Front-end */}
        <div className="section-1">
          <h3 className="text">Front-end</h3>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={ReactJSLogo}
              alt="ReactJS-Logo"
            />
            <br />
            React is a free and open-source front-end JavaScript library for
            building user interfaces or UI components. It is maintained by
            Facebook and a community of individual developers and companies.
            React can be used as a base in the development of single-page or
            mobile applications.
          </p>
          <a href="https://reactjs.org/">
            <button>Click Here</button>
          </a>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={AngularLogo}
              alt="Angular-Logo"
            />
            <br />
            Angular is a TypeScript-based free and open-source web application
            framework led by the Angular Team at Google and by a community of
            individuals and corporations. Angular is a complete rewrite from the
            same team that built AngularJS.
          </p>
          <a href="https://angular.io/">
            <button>Click Here</button>
          </a>
        </div>
        {/* Backend */}
        <div className="section-1">
          <h3 className="text">Backend</h3>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={NodeJSLogo}
              alt="NodeJS-Logo"
            />
            <br />
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on the V8 engine and executes
            JavaScript code outside a web browser.Node is useful for developing
            applications that require a persistent connection from the browser
            to the server and is often used for real-time applications such as
            chat, news feeds and web push notifications.
          </p>
          <a href="https://nodejs.org/en/download/">
            <button>Click Here</button>
          </a>
          <p className="text">
            <img
              className="front-end-logo-webdev-dev"
              src={MongoDB}
              alt="MongoDB-Logo"
            />
            <br />
            MongoDB is a source-available cross-platform document-oriented
            database program. Classified as a NoSQL database program, MongoDB
            uses JSON-like documents with optional schemas. MongoDB is developed
            by MongoDB Inc. and licensed under the Server Side Public License
            (SSPL).
          </p>
          <a href="https://www.mongodb.com/">
            <button>Click Here</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebSoftware;
