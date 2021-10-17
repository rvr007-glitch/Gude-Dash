import logo from './logo.svg';
import './App.css';
import Chart from "./components/chart"
import { Component } from 'react';
import FooterBtn from './components/Footer/FooterBtn';
import Clang from "./components/Footer/lang/Clang"
import Code from "./components/Footer/lang/coding/codinglang"
import CodeCart from "../src/components/Footer/lang/coding/CodingCardUI"
import CodingCards from './components/Footer/lang/coding/codingcard';
import Devlop from './components/Devlopment/Devlop';
import ThreeCardUI from './components/Devlopment/threecardUI';
import ThreeCards from './components/Devlopment/threecard';
import ResourceCard from './components/resources/resourcecard';

import Comments from './comments/Comments';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Community from './components/Community';
import CodingCardUI from '../src/components/Footer/lang/coding/CodingCardUI';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Resources from "./pages/Resorces";
import "./styles.css";



import devs from "./components/dev-cards/devcardsUI";
import Javalang from './components/Footer/lang/javalang';

import starrating from './comments/starrating';

import Like from './components/like';
import ResumeCard from './components/cards/resumecardUI';
import Login from './pages/Login';
import Dev from './dev';
import codinglang from './components/Footer/lang/coding/codinglang';
import Codinglang from './components/Footer/lang/coding/codinglang';
import Tabs from './pages/Resorces';
import Navbar from './components/SNavbar';
import Projects from "./pages/SProjects"
import CPSoftwares  from "./pages/Cp-softwares"
import SoftwareCards from './components/Devlopment/SoftwareCards';
import Software from './components/Devlopment/Software';
import WebSoftware from './pages/web-softwares';
import WebDev from './pages/WebDev-Dev';
import Ml from './pages/Ml-Dev';
import AndroidDev from './pages/AndroidDev-Dev';
import Cloud from './pages/Cloud-Dev';
import Platform from "./pages/SPlatform"
import Resumes from './components/Resumes';
import imageview from './components/imageview';
import Imageview from './components/imageview';
import { Source } from 'webpack-sources';
import Sources from './components/resources/resources';

class App extends Component {

  render() {
    return (


      <>
        <BrowserRouter>
         <Navbar/>

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/projects" exact component={Projects}></Route>


            <Route path="/resources" component={Resources}></Route>
          
            <Route path="/languages" component={CodingCards}></Route>
            <Route path="/Devlopment" component={Dev}></Route>
            <Route path="/Clang" component={Clang}></Route>
            <Route path="/Javalang" component={Javalang}></Route>
            <Route path="/Com" component={Community}></Route>
            <Route path="/comments"  >
              <Comments currentUserId="1" />
            </Route>
            <Route path="/star" component={starrating}></Route>
            <Route path="/like" component={Like}></Route>
            <Route path="/resumecard" component={Resumes}></Route>
            <Route path="/log" component={Login}></Route>
            <Route path="/codinglang" component={Codinglang}></Route>
            <Route path="/route" component={Tabs}></Route>
            <Route path="/software" component={ Software}></Route>

            <Route path="/cpsoftware" component={CPSoftwares}></Route>
            <Route path="/websoftware" component={WebSoftware}></Route>
            <Route path="/webdev" component={WebDev}></Route>

            <Route path="/mldev" component={Ml}></Route>

            <Route path="/appdev" component={AndroidDev}></Route>
            <Route path="/clouddev" component={Cloud}></Route>
            <Route path="/platformcode" component={Platform}></Route>
            <Route path="/imgview" component={Imageview}></Route>
            <Route path="/rescard" component={Sources}></Route>




          </Switch>
        </BrowserRouter>
      </>

    );
  }
}


export default App;
