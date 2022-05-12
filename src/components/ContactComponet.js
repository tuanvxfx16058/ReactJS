import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  CardGroup,
  Col,
  Label,
  Row,
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";

const required =(val)=>val&&val.length
const maxLength=(len)=>(val)=>!(val)||(val.length<=len)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const isNumber =(val)=> !isNaN(Number(val))
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Contact extends Component {
  constructor(props) {
    super(props);
    
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  HandleSubmit(value) {
    console.log("an nut submit" + JSON.stringify(value));
    alert("an nut submit" + JSON.stringify(value));
    console.log(value);
    // sukien.preventDefault
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
            <LocalForm onSubmit={(value)=>this.HandleSubmit(value)}>
              
              {/* fist name */}
              <Row className='form-group'>
                <Label Forhtml='fistname' md={2}>Fist name</Label>
                <Col md={10}>
                  <Control.text model='.fistname' id='fistname' name='fistname'
                      placeholder="fistname" className="form-control"  
                      validators={{
                        required, minLength:minLength(3), maxLength: maxLength(15)
                      }}
                      ></Control.text>
                  <Errors 
                    className="text-danger"
                    model='.fistname'
                    show='touched'  
                    messages={{
                      required:'Required',
                      minLength: 'Nhập nhiều hơn 2 ký tự',
                      maxLength:'Nhập ít hơn 15 ký tự'  
                    }}
                  >
                  </Errors>    
                </Col>
              </Row>

              {/* last name */}
              <Row className='form-group'>
                <Label Forhtml='lastname' md={2}>Last name</Label>
                <Col md={10}>
                  <Control.text model='.lastname' id='lastname' name='lastname'
                      placeholder="lastname" className="form-control"  
                      validators={{
                        required, minLength:minLength(3), maxLength: maxLength(15)
                      }}
                  ></Control.text>
                  <Errors 
                    className="text-danger"
                    model='.lastname'
                    show='touched'  
                    messages={{
                      required:'required',
                      minLength: 'Nhập nhiều hơn 2 ký tự',
                      maxLength:'Nhập ít hơn 15 ký tự'  
                    }}
                  >
                  </Errors>    
                </Col>
              </Row>

              {/*Tel num*/}
              <Row className='form-group'>
                <Label Forhtml='telnum' md={2}>Tel number</Label>
                <Col md={10}>
                  <Control.text model='.telnum' id='telnum' name='telnum'
                      placeholder="Tel. Number" className="form-control"  
                      validators={{
                        required, minLength:minLength(3), maxLength: maxLength(15), isNumber
                      }}
                  ></Control.text>
                  <Errors 
                    className="text-danger"
                    model='.telnum'
                    show='touched'  
                    messages={{
                      required:'required',
                      minLength: 'Nhập nhiều hơn 2 ký tự',
                      maxLength:'Nhập ít hơn 15 ký tự' ,
                      isNumber:'Phải nhập là số' , 
                    }}>
                  </Errors>    
                </Col>
              </Row>

              {/* email */}
              <Row className='form-group'>
                <Label Forhtml='email' md={2}>Email</Label>
                <Col md={10}>
                  <Control.text model='.email' id='email' name='email'
                      placeholder="email" className="form-control"  
                      validators={{
                        required, validEmail
                      }}
                      ></Control.text>
                  <Errors 
                    className="text-danger"
                    model='.email'
                    show='touched'  
                    messages={{
                      required:'required',
                      validEmail:'nhập sai email'
                    }}
                  >
                  </Errors>    
                </Col>
              </Row>

              {/* checkbox */}
              <Row className='form-group'>
                <Col md={{offset:2, size:6} }>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox model='.agree' name='agree' className="form-check-input" /> 
                      <strong>Đồng ý thì check vào đây</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{offset:1, size:3} }>
                  <Control.select model='.contactType' name='contactType' className="form-control">
                    <option>--</option>
                    <option>Tel .</option>
                    <option>Email .</option>
                  </Control.select> 
                </Col>
              </Row>

              {/* text area */}
              <Row className='form-group'>
                <Label Forhtml='message' md={2}>Phản hồi của bạn</Label>
                <Col md={10}>
                  <Control.textarea model='.textarea' id='textarea' name='textarea'
                      rows={12} className="form-control"  ></Control.textarea>
                </Col>
              </Row>

              {/* submit button */}
              <Row className='form-group'>
                <Col md={{offset:2, size:10}}>
                  <Button type='submit' color='primary'>Send Feedback</Button>
                </Col>
              </Row>
            </LocalForm>
            





























          </div>
        </div>
      </div>
    );
  }
}
