import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg } from "reactstrap";
import dateFormat from "dateformat";

export default function Chitietnhanvien(props) {
  console.log(props.staff)
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-sm-2 col-md-2">
          <Card>
            <CardImg src={props.staff.image} />
          </Card>
        </div>
        <div className="col-12 col-sm-8 col-md-8">
          <strong>Họ và tên:{props.staff.name} </strong>
          <br />
          Năm sinh: <i>{dateFormat(props.staff.doB, "dd/mm/yyyy")}</i>
          <br />
          Phòng ban: <i>{props.staff.department.name}</i>
          <br />
          Ngày vào cty:<i>{dateFormat(props.staff.startDate, "dd/mm/yyyy")}</i>
          <br />
          Chức vụ: <i>{props.staff.chucdanh}</i>
          <br />
          Số ngày nghỉ còn lại:<i> {props.staff.annualLeave}</i>
          <br />
          Số ngày đã làm thêm:<i>{props.staff.overTime}</i>
          <br />
        </div>
      </div>
    </div>
  );
}
