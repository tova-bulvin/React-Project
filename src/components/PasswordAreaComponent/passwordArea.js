import React, { Component } from 'react';
import {Form,Button,ButtonGroup,Col,InputGroup} from 'react-bootstrap';

export default class PasswordArea extends Component {
  constructor(props){
    super(props);
    this.input=<Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>enter password again</Form.Label>
                <Form.Control onChange={this.handleConfirmPassword} type="password" placeholder="new password" required />
              </Form.Group>;
    this.onChangePassword=this.onChangePassword.bind(this);
  }

  onChangePassword(event){
    this.props.todoFunc(event);
  }
  render() {
    return (
      <div className="Passwordarea">
        
        <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>shhhhhh... be quiet! enter your password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.onChangePassword} required />
            </Form.Group>
            {(this.props.is_new_user) ? <div>{this.input}</div>:undefined}
            
      </div>
    )
  }
}
