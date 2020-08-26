import React, { Component } from 'react';
import {Form,Button,ButtonGroup,Col,InputGroup} from 'react-bootstrap';

export default class ForgetPassword extends Component {

  render() {
    return (
      <div className="Forgetpassword">
        <h2>the code that you get in your email</h2>
        <Form>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>enter code here</Form.Label>
              <Form.Control type="password" placeholder="code" required />
            </Form.Group>
            {(this.state.is_new_user) ? <div>{this.input}</div>:undefined}
            
          <ButtonGroup  size="lm">
            <Button variant="primary" type="submit">
            Submit
          </Button>
          </ButtonGroup>
        </Form>
      </div>
    )
  }
}
