import React from "react";
import ReactDom from "react-dom";

import { Grid, Button } from "@material-ui/core";

// images
import graphics1 from "../images/graphics1.png";
import Graph_front_end from "../images/Graph-front-end.jpeg";
import Angular_Logo from "../images/angular-logo.png";
import React_Logo from "../images/react-logo.png";
import Vue_Logo from "../images/vue-logo.png";
import Roadmap1 from "../images/roadmapWebDev.png";
import Roadmap2 from "../images/Roadmap2WebDev.png";

function WebDev() {
  return (
    <div className="dev">
      <h1 className="title-dev">Web Development</h1>
      <div className="h4-webdev-dev">
        <div className="section-1">
          <h3 className="text">Lets Get Started: </h3>
          <p className="text">
            Web development encompasses all of the tasks involved in creating
            websites for intranet or internet hosting.There are three types of
            Web developers: front-end, back-end, and full-stack.
            <h5> Scope of Web Development </h5>
            Being a web developer, there is no need to stick to one particular
            area. Due to similarity in the interfaces, switching from web
            development to mobile development is simple for web developers.
            Moreover, various activities comprising design, development,
            testing, and client management will assist you in gaining project
            management abilities. Companies are always looking for new talent,
            allowing aspiring developers to find their ideal position.
            <br />
            <h5>Before writing the code</h5>
            Before start writing the code first you need to have a basic idea of
            how your website should look like.You can draw a rough sketch of
            your website either on copy or it is highly suggested to use
            platforms like figma.After that learn the basics and don't hurry
            building a full-fleged website takes time.Here is the link to all
            the softwares that you will need.
          </p>
          <a href="#">
            <button className="buttons-webdev-dev">Softwares</button>
          </a>
        </div>
        <Grid container spacing={2} id="footer">
          <Grid item xs={12} md={6}>
            <h3>Basics:</h3>
            <p className="text">
              Learn the basics first like HTML, CSS, JAVASCRIPT.
              <br />
              <ul className="text">
                <li>
                  HTML – Hypertext Markup Language (HTML) is the foundation of
                  building your web page. It’s everything that is needed to hold
                  the structure together i.e. body, header and paragraph
                  tags.For example, is my content a set of paragraphs or a list
                  of bullet points? Do I have images inserted on my page? Do I
                  have a data table?
                </li>
                <br />
                <li>
                  CSS – Cascading Stylesheets (CSS) is the code that you use to
                  style your website. For example, do you want the text to be
                  black or red? Where should content be drawn on the screen?
                  What background images and colors should be used to decorate
                  your website?
                </li>
                <br />
                <li>
                  JavaScript – JavaScript is the programming language that you
                  use to add interactive features to your website. Some examples
                  could be games, things that happen when buttons are pressed or
                  data is entered in forms, dynamic styling effects, animation,
                  and much more.
                </li>
                <br />
              </ul>
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className="graphics1-webdev-dev"
              src={graphics1}
              alt="graphic1"
            />
          </Grid>
        </Grid>

        <h3>Global Preference</h3>
        <Grid container spacing={2} id="footer">
          <Grid item xs={12} md={6}>
            <span className="Heading-webdev-dev">FRONT-END</span>
            <div className="front-end-webdev-dev text">
              <img
                className="front-end-logo-webdev-dev"
                src={Angular_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>
            <div className="front-end-webdev-dev text">
              <img
                className="front-end-logo-webdev-dev"
                src={Vue_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>

            <div className="front-end-webdev-dev text">
              <img
                className="front-end-logo-webdev-dev"
                src={React_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className="front-end-graph-webdev-dev"
              src={Graph_front_end}
              alt="Graph-front-end"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <span className="Heading-webdev-dev">FRONT-END</span>
            <div className="front-end-webdev-dev">
              <img
                className="front-end-logo-webdev-dev"
                src={Angular_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>
            <div className="front-end-webdev-dev">
              <img
                className="front-end-logo-webdev-dev"
                src={Vue_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>

            <div className="front-end-webdev-dev">
              <img
                className="front-end-logo-webdev-dev"
                src={React_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className="front-end-graph-webdev-dev"
              src={Graph_front_end}
              alt="Graph-front-end"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <span className="Heading-webdev-dev">FRONT-END</span>
            <div className="front-end-webdev-dev">
              <img
                className="front-end-logo-webdev-dev"
                src={Angular_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>
            <div className="front-end-webdev-dev">
              <img
                className="front-end-logo-webdev-dev"
                src={Vue_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>

            <div className="front-end-webdev-dev">
              <img
                className="front-end-logo-webdev-dev"
                src={React_Logo}
                alt="angular-logo"
              />
              Angular, developed by Google, was first released in 2010, making
              it the oldest of the lot. It is a TypeScript-based JavaScript
              framework.
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className="front-end-graph-webdev-dev"
              src={Graph_front_end}
              alt="Graph-front-end"
            />
          </Grid>
        </Grid>

        <h3>Know from Experts </h3>
        <ul className="text">
          <li>
            RoadMap for Web Development for beginners by Coding Ninjas:
            <a href="https://www.youtube.com/watch?v=nwz2Cmq3zD4">
              https://www.youtube.com/watch?v=nwz2Cmq3zD4{" "}
            </a>
          </li>
          <br />
          <li>
            Complete WebDevlopment RoadMap by Anuj Bhaiya:{" "}
            <a href="https://www.youtube.com/watch?v=_1yYCa0_Q1c">
              {" "}
              https://www.youtube.com/watch?v=_1yYCa0_Q1c
            </a>{" "}
          </li>
        </ul>
        <h3>RoadMap</h3>
        <img className="Roadmap-webdev-dev" src={Roadmap1} alt="roadmap-1" />
        <br />
        <img className="Roadmap-webdev-dev" src={Roadmap2} alt="roadmap-2" />
      </div>

      <button
        style={{
          float: "center"
        }}
        className="buttons-webdev-dev"
      >
        Opinions
      </button>
      <br />
      <button
        style={{
          float: "left"
        }}
        className="buttons-webdev-dev"
      >
        Resources
      </button>
      <button
        style={{
          float: "right"
        }}
        className="buttons-webdev-dev"
      >
        Projects
      </button>
    </div>
  );
}

export default WebDev;
