import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  FormGroup,
  Form,
  Label,
  Input,
  Col,
  Button,
} from "reactstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fistname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contatcType: "Tel.",
      message: "",
    };
    this.HandleInputChange=this.HandleInputChange.bind(this)
    this.HandleSubmit=this.HandleSubmit.bind(this)
  }

HandleInputChange(sukien){
  const target=sukien.target;
  const value=target.type==='checkbox'?target.checked:target.value
  const tuan=target.name
  this.setState({
    [tuan]:value
  })
}

HandleSubmit(sukien){
  console.log('an nut submit'+ JSON.stringify(this.state))
  alert('an nut submit'+JSON.stringify(this.state))
  sukien.preventDefault()
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contactus</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contactus</h3>
          </div>
          <hr />
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send Feed Back</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.HandleSubmit}>
              <FormGroup row>
                <Label htmlFor="fistname" md={2}>
                  Fist Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="fistname"
                    name="fistname"
                    placeholder="fist name"
                    value={this.state.fistname}
                    onChange={this.HandleInputChange}
                  ></Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last name"
                    value={this.state.lastname}
                    onChange={this.HandleInputChange}
                  ></Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Tel Number
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel Number"
                    value={this.state.telnum}
                    onChange={this.HandleInputChange}
                  ></Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.HandleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check >
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.HandleInputChange}
                      />
                      <strong>Đồng ý thì chọn</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contatcType}
                    onChange={this.HandleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                    

                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  FeedBack
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    row={12}
                    value={this.state.message}
                    onChange={this.HandleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md ={{offset:2, size:10}}>
                  <Button type='submit' color='primary'>Send Feedback</Button>
                </Col>
              </FormGroup>

            </Form>
          </div>
        </div>
      </div>
    );
  }
}
