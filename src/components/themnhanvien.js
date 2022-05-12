import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row,
  Col
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { DEPARTMENTS } from "../staffs";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !Number.isNaN(Number(val));
const numRange = (val) => val > 0 && val < 4;




class AddStaff extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  //đóng mở hộp form Modal thêm nhân viên
  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen})
    console.log(this.state.isModalOpen)
  }







//sự kiện handleSubmit khi người dùng thêm nhân viên mới
handleSubmit(values){

  const department=DEPARTMENTS.find((value)=>
      value.id===values.department
  )
  const newstaff={
      id: this.props.staffs.length,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: department,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
  }
  console.log(newstaff)
  this.props.onStaff(newstaff);

    //điều kiện nhập đủ các trường
// if (newstaff.name.includes('')||newstaff.doB.includes('')||newstaff.salaryScale.includes('')||newstaff.startDate.includes('')
// ||newstaff.department.includes('')||newstaff.annualLeave.includes('')||newstaff.overTime.includes(''))
// alert('Hãy điền đầy đủ thông tin')
}    




render(){

  

return (
  // form thêm nhân viên

  <React.Fragment>
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader toggle={this.toggleModal}> Them nhan vien</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row class="form-group">
            <Label htmlFor="name" md={5}>
              Nhập họ tên
            </Label>
            <Col md={7}>
              <Control
                model=".name"
                type="text"
                id="name"
                name="name"
                placeholder="Tên phải lớn hơn 3 và nhỏ hơn 10 ký tự"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(30),
                }}
              ></Control>
              <Errors
                className="text-danger"
                model=".name"
                show="touched"
                messages={{
                  required: "",
                  minLength: "Yêu cầu nhập nhiều hơn 3 ký tự",
                  maxLength: "Yêu cầu nhập ít hơn 30 ký tự",
                }}
              />
            </Col>
          </Row>

          <Row class="form-group">
            <Label htmlFor="doB" md={5}>
              Ngày Sinh
            </Label>
            <Col md={7}>
              <Control
                model=".doB"
                type="date"
                id="doB"
                name="doB"
                className="form-control"
                validators={{
                  required,
                }}
              ></Control>
              <Errors
                className="text-danger"
                model=".doB"
                show="touched"
                messages={{
                  required: "Yêu cầu bắt buộc",
                }}
              />
            </Col>
          </Row>

          <Row class="form-group">
            <Label htmlFor="salaryScale" md={5}>
              Hệ Số Lương
            </Label>
            <Col md={7}>
              <Control
                model=".salaryScale"
                type="text"
                id="salaryScale"
                name="salaryScale"
                placeholder="Hệ số lương phải từ 1 đến 3"
                className="form-control"
                validators={{ isNumber, numRange }}
              ></Control>
              <Errors
                className="text-danger"
                model=".salaryScale"
                show="touched"
                messages={{
                  isNumber: "Yêu cầu bắt buộc phải là số",
                  numRange: "Yêu cầu nhập số từ 1.0 - 3.0",
                }}
              />
            </Col>
          </Row>

          <Row class="form-group">
            <Label htmlFor="startDate" md={5}>
              Ngày Vào Công Ty
            </Label>
            <Col md={7}>
              <Control
                model=".startDate"
                type="date"
                id="startDate"
                name="startDate"
                className="form-control"
                validators={{
                  required,
                }}
              ></Control>
              <Errors
                className="text-danger"
                model=".startDate"
                show="touched"
                messages={{
                  required: "Yêu cầu bắt buộc",
                }}
              />
            </Col>
          </Row>

          <Row class="form-group">
            <Label htmlFor="department" md={5}>
              Bộ Phận
            </Label>
            <Col md={7}>
              <Control
                model=".department"
                type="select"
                id="department"
                name="department"
                className="form-control"
                defaultValue="default"
              >
                <option value="default">Hãy chọn phòng ban</option>
                <option value="Dept01">Sale</option>
                <option value="Dept02">HR</option>
                <option value="Dept03">Marketing</option>
                <option value="Dept04">IT</option>
                <option value="Dept05">Finance</option>
              </Control>
            </Col>
          </Row>

          <Row class="form-group">
            <Label htmlFor="annualLeave" md={5}>
              Số Ngày Nghỉ Còn Lại
            </Label>
            <Col md={7}>
              <Control
                model=".annualLeave"
                type="text"
                id="annualLeave"
                name="annualLeave"
                placeholder="Số ngày nghỉ còn lại không nhiều hơn 10 ngày"
                className="form-control"
                validators={{
                  isNumber,
                }}
              ></Control>
              <Errors
                model=".annualLeave"
                show="touched"
                className="text-danger"
                messages={{
                  isNumber: "Yêu cầu nhập số ",
                }}
              />
            </Col>
          </Row>

          <Row class="form-group">
            <Label htmlFor="overTime" md={5}>
              Số Ngày Làm thêm
            </Label>
            <Col md={7}>
              <Control
                model=".overTime"
                type="text"
                id="overTime"
                name="overTime"
                placeholder="Số ngày làm thêm không nhiều hơn 10 ngày"
                className="form-control"
                validators={{
                  isNumber,
                }}
              ></Control>
              <Errors
                model=".overTime"
                className="text-danger"
                show="touched"
                messages={{
                  isNumber: "Yêu cầu nhập số ",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="col-7 offset-5">
              <Button type="submit" value="submit" className="bg-primary">
                Nhập Mới
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>
    <FormGroup className="add">
      <Button color="danger" onClick={this.toggleModal}>
        <span className="fa fa-plus" aria-hidden="true"></span>
      </Button>
    </FormGroup>
  </React.Fragment>
);

}
}
export default AddStaff;

  




