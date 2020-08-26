import React, { Component } from 'react';
import Enter from '../EnterComponent/Enter.js'
import HomePage from '../HomePageComponent/homePage.js';
import MainMenu from "../MainMenuComponent/MainMenu.js";
import Login from "../Login/Login";
import './Main.css';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      isEnter:false
    }
    
    this.enterProject=this.enterProject.bind(this);
    this.enterPage=this.enterPage.bind(this);
    this.enterPage();
  }
  enterProject(){
    this.setState({"isEnter":true});
    document.getElementById("enterButton").setAttribute("style","display:none");
    this.enterPage(1);
  }
  enterPage(compIndex){
    switch (compIndex) {
      case 1:
        //this.compRender=<Enter todofunc={this.enterPage}/>;
        this.compRender=<Login todofunc={this.enterPage}/>;
        break;
      case 2:
        this.compRender=<MainMenu/>;
        this.setState({"isEnter":false});
        break;
      case 4:
        //put hear register component
        console.log("put hear register component");
      default:
        this.compRender=<HomePage todofunc={this.enterProject}/>;
        break;
    }
    this.render();
  }
  
  render(){
    var el=this.compRender;
    return (
      <div className="main">
        <div>
          {el}
        </div>
        <div>

        </div>
      </div>
      
    )
  }
  }
