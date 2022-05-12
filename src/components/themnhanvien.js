import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { DEPARTMENTS } from "../staffs";
// import { DEPARTMENTS } from "../shared/staffs";

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
      touched: {
        name: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
   this.handleInputChange=this.handleInputChange.bind(this)
   this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate=this.validate.bind(this)
  }

  //đóng mở hộp form Modal thêm nhân viên
  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen})
  }

// Sự kiện lấy data khi người dùng nhập vào
handleInputChange(event){
  const target=event.target
  const value=target.value
  const name=target.name
  
  this.setState({
    [name]:value
  })
}


//Sự kiện khi người dùng Blur vào các ô nhập
handleBlur=(value)=>(e)=>{
  this.setState({
    touched:{...this.state.touched,[value]:true}
  })
}


//Validate khi người dùng nhập không đúng (tên, hệ số lương, số ngày còn lại, số ngày làm thêm)
validate(name,salaryScale, annualLeave, overTime){
    const errors={
      name:'',
      salaryScale:'',
      annualLeave:'',
      overTime:''
    }
    // validate name
if (this.state.touched.name && name.length < 3)
errors.name = "Yêu cầu nhập nhiều hơn 3 ký tự";
else if (this.state.touched.name && name.length > 10)
errors.name = "Yêu cầu nhập ít hơn 10 ký tự";

// validate annualLeave
if (this.state.touched.annualLeave && Number(annualLeave) > 10)
errors.annualLeave = "Số ngày nghỉ còn lại không nhiều hơn 10 ngày";
else if (!Number.isFinite(Number(annualLeave)))
errors.annualLeave="Phải nhập là dạng số"
// else if ( Number.isFinite(annualLeave) )
// else if (
// this.state.touched.annualLeave &&
// annualLeave.split("").filter((x) => x === ".").length !== 1
// )
// errors.annualLeave =
//   "Số ngày nghỉ của bạn phải có dấu chấm ở giữa (ví dụ 1.5)";

// validate salaryScale
if (
(this.state.touched.salaryScale && Number(salaryScale) > 3.0) ||(
Number(salaryScale) < 1.0&&this.state.touched.salaryScale)
)
errors.salaryScale = "Hệ số lương phải từ 1 đến 3";
else if (!Number.isFinite(Number(salaryScale)))
errors.salaryScale="Phải nhập là dạng số"
// else if (
// this.state.touched.salaryScale &&
// salaryScale.split("").filter((x) => x === ".").length !== 1
// )
// errors.salaryScale = "Hệ số lương phải có dấu chấm ở giữa (ví dụ 1.5)";

// validate overTime
if (this.state.touched.overTime && Number(overTime) > 10)
  errors.overTime = "Số ngày làm thêm không nhiều hơn 10 ngày";
  else if (!Number.isFinite(Number(overTime)))
  errors.overTime="Phải nhập là dạng số"

// else if (
//   this.state.touched.overTime &&
//   overTime.split("").filter((x) => x === ".").length !== 1
// )
//   errors.overTime = "Số ngày làm thêm phải có dấu chấm ở giữa (ví dụ 1.5)";




    /*   
    // validate name
      if (this.state.touched.name&&name.length < 3)
         errors.name='Tên phải lớn hơn 3 ký tự'
      else if (this.state.touched.name&name.length > 10)
         errors.name='Tên phải nhỏ hơn 10 ký tự'
      
      //validata số ngày nghỉ còn lại
      if (this.state.touched.annualLeave&&Number(annualLeave)>10)
        errors.annualLeave='Số ngày nghỉ còn lại không lớn hơn 10'

        // validate hệ số lương (phải lớn hơn lương co bản). Ở đây mình tự quy định phải trong khoảng (1-3)
      if ((this.state.touched.salaryScale&&salaryScale.length > 3) || salaryScale.length < 1)
        errors.salaryScale='hệ số lương phải trong khoảng trong khoảng (1-3)'
     

      //validata số ngày làm thêm không quá 10 ngày 
      else if (this.state.touched.overTime&&overTime.length >3)
       errors.overTime='Số ngày làm thêm không quá 3 ký tự'
      */
    return errors   
    }

//sự kiện handleSubmit khi người dùng thêm nhân viên mới
handleSubmit(e){
  e.preventDefault()

  const department=DEPARTMENTS.find((value)=>
      value.id===this.state.department
  )
  const newstaff={
      id: this.props.staffs.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
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
//khởi tạo  biến validateor
const errors=this.validate(
  
  this.state.name,
  this.state.salaryScale,
  this.state.annualLeave,
  this.state.overTime

)
  

return (
  // form thêm nhân viên
  
  <React.Fragment>

    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader toggle={this.toggleModal}> Them nhan vien</ModalHeader>
      <ModalBody>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nhập họ tên</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Tên phải lớn hơn 3 và nhỏ hơn 10 ký tự"
              value={this.state.name}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur("name")}
              valid={errors.name === ""}
              invalid={errors.name !== ""}
            ></Input>
            <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="doB">Ngày Sinh</Label>
            <Input
              type="date"
              id="doB"
              name="doB"
              value={this.state.doB}
              onChange={this.handleInputChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="salaryScale">Hệ Số Lương</Label>
            <Input
              type="text"
              id="salaryScale"
              name="salaryScale"
              placeholder="Hệ số lương phải từ 1 đến 3"
              value={this.state.salaryScale}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur("salaryScale")}
              valid={errors.salaryScale === ""}
              invalid={errors.salaryScale !== ""}
            ></Input>
            <FormFeedback>{errors.salaryScale}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="startDate">Ngày Vào Công Ty</Label>
            <Input
              type="date"
              id="startDate"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleInputChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="department">Bộ Phận</Label>
            <Input type="select" id="department" name="department" 
              onChange={this.handleInputChange}
            >
              <option value="select">Chọn phòng ban</option>
              <option value="Dept01">Sale</option>
              <option value="Dept02">HR</option>
              <option value="Dept03">Marketing</option>
              <option value="Dept04">IT</option>
              <option value="Dept05">Finance</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="annualLeave">Số Ngày Nghỉ Còn Lại</Label>
            <Input
              type="text"
              id="annualLeave"
              name="annualLeave"
              placeholder="Số ngày nghỉ còn lại không nhiều hơn 10 ngày"
              value={this.state.annualLeave}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur("annualLeave")}
              valid={(errors.annualLeave === "")}
              invalid={errors.annualLeave !== ""}
            ></Input>
            <FormFeedback>{errors.annualLeave}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="overTime">Số Ngày Làm thêm</Label>
            <Input
              type="text"
              id="overTime"
              name="overTime"
              placeholder="Số ngày làm thêm không nhiều hơn 10 ngày"
              value={this.state.overTime}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur("overTime")}
              valid={errors.overTime ===""}
              invalid={errors.overTime !== ""}
            ></Input>
            <FormFeedback>{errors.overTime}</FormFeedback>
          </FormGroup>

          <Button type="submit" value="submit" className="bg-primary">
            Nhập Mới
          </Button>
        </Form>
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

  




