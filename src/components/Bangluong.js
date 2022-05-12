import React from "react";
import { Link } from "react-router-dom";
import { STAFFS } from "../staffs";
import {
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
// import Sapxep from "./Sapxep";

function RenderBangluong() {
  const bangluong = STAFFS.map((value) => {
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <Card className="m-1">
          <CardBody>
            <CardTitle>{value.name}</CardTitle>
            <CardText>
              Mã nhân viên: {value.id}
              <br />
              Hệ số lương: {value.salaryScale}
              <br />
              Số ngày làm thêm: {value.overTime}
              <br />
            </CardText>
            <CardFooter>
              Lương:{" "}
              {Math.round(
                value.salaryScale * 3000000 + value.overTime * 200000
              )}
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    );
  });

  return <React.Fragment>{bangluong}</React.Fragment>;
}

export default function Bangluong() {
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
        <RenderBangluong />
      </div>
    </div>
  );
}
