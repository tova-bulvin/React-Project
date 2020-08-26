import React, { Component } from 'react';
import './Enter.css';
import {Form,Button,ButtonGroup,Col,InputGroup} from 'react-bootstrap';
import PasswordArea from '../PasswordAreaComponent/passwordArea';
import MainMenu from "../MainMenuComponent/MainMenu";
import { renderEmail } from 'react-html-email';
import { InlineLink } from "../../ForgetPasswordEmail";



export default class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
      is_new_user:false,
      password:'',
      invalidPassword:false,
      forgetPass:false,
      forget_password:false,
      headingText:"first, call us your user",
      hideButtons:"",
      email: '',
    }
    this.input=<Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>enter password again</Form.Label>
                <Form.Control onChange={this.handleConfirmPassword} type="password" placeholder="new password" required />
              </Form.Group>;
    this.newUserClick=this.newUserClick.bind(this);
    this.handleConfirmPassword=this.handleConfirmPassword.bind(this);
    this. changePassword=this.changePassword.bind(this);
    this.forgetPassword=this.forgetPassword.bind(this);
    this.changeMail=this.changeMail.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
  }


  changeMail(event){
    this.setState({email:event.target.value});
  }
  changePassword(event){
    this.setState({password:event.target.value});
  }


  newUserClick(){
    this.setState({is_new_user:true});
  }

  forgetPassword(){
    this.setState({forget_password:true,headingText:"enter your email",hideButtons:"hidden"});
  }

  handleConfirmPassword = (event) => {
    if (event.target.value !== this.state.password) {
      //alert("oyyyyyyy");
    }
  }
  handleSubmit(event){
    if(this.state.forget_password){
      event.preventDefault();
      //const messageHtml =  renderEmail(<InlineLink name={this.state.email}/>);
      const templateId = 'template_zJddSrub';
      //this.sendFeedback(templateId, {message_html: "fffffff", from_name: "tova", from_email: this.state.email});
    }
    else{
      if(this.state.email=="tovi27818@gmail.com" && this.state.password=="to"){
        event.preventDefault();
        this.props.todofunc(2);
      }
    }
  }
 

  render() {
   
    return (
      <div className="main-enter">
        <h3>{this.state.headingText}</h3>
        <Form>
          <Form.Group as={Col}  controlId="validationCustomUsername">
            <Form.Label>enter your amazing email adress..</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                placeholder="Enter email"
                aria-describedby="inputGroupPrepend"
                required
                onChange={this.changeMail}
              />
            </InputGroup>
          </Form.Group>
          {(!this.state.forget_password) ? <PasswordArea todoFunc={this.changePassword} is_new_user={this.state.is_new_user}/>:undefined}
            <div class="btnGroup">
            <ButtonGroup  size="lm">
            <Button variant="primary" type="submit"  onClick={this.handleSubmit} >
            Submit
          </Button>
          </ButtonGroup>
            <ButtonGroup size="lm" >
              <Button variant="secondary" onClick={this.newUserClick} hidden={this.state.hideButtons}>
                new user
              </Button>
            </ButtonGroup>
            <ButtonGroup size="lm">
              <Button variant="secondary" onClick={this.forgetPassword} hidden={this.state.hideButtons}>
                  i forget password ;(
              </Button>
           </ButtonGroup>
         
          </div>
        </Form>
        
      </div>
      );
  }
}

