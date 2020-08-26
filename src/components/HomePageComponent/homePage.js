import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './homePage.css'
import * as Icon from 'react-bootstrap-icons';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
    
    this.enterProject=this.enterProject.bind(this);
    
  }
  enterProject(){
   this.props.todofunc();
  }
  render() {
    return (
      <div className="homepage">
        <div className="home-part-1"> 
          <h2 aria-level="1">Welcome to your Charger</h2>
          <div className="wrap-box">
            <div className="box">
              <div className="wrap-icon">
                <Icon.Battery></Icon.Battery>
              </div>
              <div className="heading">empty</div>
              <div className="text-box">fill empty?</div>
            </div>
            <div className="box">
              <div className="wrap-icon">
                <Icon.BatteryCharging></Icon.BatteryCharging>
              </div>
              <div className="heading">charge</div>
              <div className="text-box">get charging..</div>
            </div>
            <div className="box">
              <div className="wrap-icon">
                <Icon.BatteryFull></Icon.BatteryFull>
              </div>
              <div className="heading">fill</div>
              <div className="text-box">be strong!</div>
            </div>
          </div>
          <div className="wrap-btn" id="enterButton">
            <Button
              bsPrefix="enter-btn"
              variant="outline-success"
              type="button"
              onClick={this.enterProject}>
                <span className="txt-btn"> GET STARTED</span>
            </Button></div>
        </div>
        <div className="home-part-2">
        </div>
        <div className="home-part-3">
          
        </div>
      </div>
    )
  }
}
