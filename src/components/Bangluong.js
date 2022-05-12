import React from "react";
import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

function RenderBangluong({bangluong}) {
  
    return (
      
        <Card className="m-1">
          <CardBody>
            <CardTitle>{bangluong.name}</CardTitle>
            <CardText>
              Mã nhân viên: {bangluong.id}
              <br />
              Hệ số lương: {bangluong.salaryScale}
              <br />
              Số ngày làm thêm: {bangluong.overTime}
              <br />
            </CardText>
            <CardFooter>
              Lương:{" "}
              {Math.round(
                bangluong.salaryScale * 3000000 + bangluong.overTime * 200000
              )}
            </CardFooter>
          </CardBody>
        </Card>
      
    )};
  
  

  

const Bangluong= (props) =>{
  const bangluong=props.staffs.map((value)=>{
      return(
        <div className="col-12 col-sm-6 col-md-4">
            <RenderBangluong bangluong={value}/>
        </div>
      )
  })
  
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân Viên </Link>{" "}
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>

        <hr />
      </div>
      
      <div className="row">
       {bangluong}
      </div>
    </div>
  );
}

export default Bangluong;