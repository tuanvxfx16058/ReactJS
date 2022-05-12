import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';


import { DEPARTMENTS } from "../staffs";
// import { DEPARTMENTS } from "../shared/staffs";

class AddStaff extends Component {
  
  constructor(props) {
    super(props);
  
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //đóng mở hộp form Modal thêm nhân viên
  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen})
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
        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
          <Row class='form-group'>
            <Label htmlFor="name">Nhập họ tên</Label>
            <Control model='.name'
              type="text"
              id="name"
              name="name"
              placeholder="Tên phải lớn hơn 3 và nhỏ hơn 10 ký tự"
              className="form-control"
            ></Control>
            </Row>

          <Row class='form-group'>
            <Label htmlFor="doB">Ngày Sinh</Label>
            <Control model='.doB'
              type="date"
              id="doB"
              name="doB"
              className="form-control"
            ></Control>
          </Row>

          <Row class='form-group'>
            <Label htmlFor="salaryScale">Hệ Số Lương</Label>
            <Control model='.salaryScale'
              type="text"
              id="salaryScale"
              name="salaryScale"
              placeholder="Hệ số lương phải từ 1 đến 3"
              className="form-control"
            ></Control>
            </Row>

          <Row class='form-group'>
            <Label htmlFor="startDate">Ngày Vào Công Ty</Label>
            <Control model='.startDate'
              type="date"
              id="startDate"
              name="startDate"
              className="form-control"
            ></Control>
          </Row>

          <Row class='form-group'>
            <Label htmlFor="department">Bộ Phận</Label>
            <Control model='.department' 
              type="select" 
              id="department" 
              name="department" 
              className="form-control"
            >
              <option value="select">Chọn phòng ban</option>
              <option value="Dept01">Sale</option>
              <option value="Dept02">HR</option>
              <option value="Dept03">Marketing</option>
              <option value="Dept04">IT</option>
              <option value="Dept05">Finance</option>
            </Control>
            </Row>

          <Row class='form-group'>
            <Label htmlFor="annualLeave">Số Ngày Nghỉ Còn Lại</Label>
            <Control model='.annualLeave'
              type="text"
              id="annualLeave"
              name="annualLeave"
              placeholder="Số ngày nghỉ còn lại không nhiều hơn 10 ngày"
              className="form-control"
            ></Control>
            </Row>

          <Row class='form-group'>
            <Label htmlFor="overTime">Số Ngày Làm thêm</Label>
            <Control model='.overTime'
              type="text"
              id="overTime"
              name="overTime"
              placeholder="Số ngày làm thêm không nhiều hơn 10 ngày"
              className="form-control"
            ></Control>
          </Row>

          <Button type="submit" value="submit" className="bg-primary">
            Nhập Mới
          </Button>
        </LocalForm>
      </ModalBody>
    </Modal>
    <FormGroup className="add ">
      <Button color="danger" onClick={this.toggleModal}>
        <span className="fa fa-plus" aria-hidden="true"></span>
      </Button>
    </FormGroup>
  </React.Fragment>
);

}
}
export default AddStaff;

  




