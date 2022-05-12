import React from "react";
import { Card, CardImg, CardBody, CardText, Input, Button,  } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, FormGroup, Col } from "reactstrap";
import { useState } from "react";
import AddStaff from "./themnhanvien";




const RenderNhanvien = ({staff}) => {
    return (
        <Card>
          <Link to={`/nhanvien/${staff.id}`}>
            <CardImg src={staff.image} alt={staff.name} />
          </Link>
          <CardBody>
            <CardText>{staff.name}</CardText>
          </CardBody>
        </Card>
    );
  };


  const Nhanvien = (props) => {
 
//dùng Hook để  khởi tạo giá trị trạng thái ban đầu      
    const [searchInput, setSearchInput] = useState("");
    const [searchStaff, setSearchStaff] = useState(props.staffs);

// submit form tim kiếm
//và thực hiện việc lọc theo kết quả tìm kiếm 
//nếu tìm thấy thì dùng Hook để đặt lại giá trị trạng thái đã thiết lập 
//còn nếu không tìm thấy thì hiện các thông báo  
  const SubmitSearch = (e) => {
    e.preventDefault();
    if (searchInput === "") alert("Nhập tìm kiếm");
    else if(searchInput !== "");

    const search = props.staffs.filter((staff) =>
      staff.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    if (search.length === 0) alert("không tìm thấy");
    else if (search.length > 0) {
      setSearchStaff(search);
    }
    // else setSearchStaff([...props.staff]);
  };


 
  // const onAddStaff = (staff) => {
  //   props.onAddStaff(staff);
  // };
 
//Thêm nhân viên mới 
// const onAddstaff=(newstaff)=>{
//   props.onAddstaff(newstaff)
// }

//render giao diện
//giao diện ban đầu Load là giá trị mà Hook khởi tạo ban đầu
//nếu tìm kiếm thấy thì dùng giá trị mới (giá trị mới này do Hook thực hiện) để render 
  const nhanvien = searchStaff.map((value) => {
    return (
      <div key={value.id} className="col-6 col-sm-4 col-md-2">
        <RenderNhanvien staff={value} />
      </div>
    );
  });

  return (
    <div className="container">

      {/* Giao diện form tìm kiếm nhân viên */}
      <div className="row p-2">
        <Col md={2}>Nhân Viên</Col>
        <Col md={1}>
          {/* <Button color="secondary"  */}
          <AddStaff staffs={props.staffs} onStaff={props.onAddStaff} />
          {/* >Thêm</Button> */}
        </Col>
        <Col md={9}>
          <Form
             onSubmit={SubmitSearch}
           >
            <FormGroup row>
              <Col md={7}>
                <Input type="text" placeholder='Nhập tên tìm kiếm' name='searchtext'
                    onChange={(e) => setSearchInput(e.target.value)}
                ></Input>
              </Col>
              <Col md={5}>
                <Button color="primary" type="submit" value="Submit" ><Link to='/timkiem'></Link>  Tìm</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </div><hr />

      {/* Render tất cả các nhân viên */}
      <div className="row">{nhanvien}</div>
    </div>
  );
};

export default Nhanvien;