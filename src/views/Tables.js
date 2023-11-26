import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Table, Tag, Space } from 'antd';
import PageTitle from "../components/common/PageTitle";
import "antd/dist/antd.css";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    // this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.changeMove.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeMove(val) {
    console.log('Move:', val);
  }
  render() {
    const dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="History table" subtitle="" className="text-sm-left" />
        </Row>
        <Table dataSource={dataSource} columns={columns} />;

        {/* Default Light Table */}
        {/* <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">History</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        No.
                  </th>
                      <th scope="col" className="border-0">
                        Temperature (*C)
                  </th>
                      <th scope="col" className="border-0">
                        Humidity (%)
                  </th>
                      <th scope="col" className="border-0">
                        Light (Lux)
                  </th>
                      <th scope="col" className="border-0">
                        Distance (Cm)
                  </th>
                      <th scope="col" className="border-0">
                        Air quality (*PPM)
                  </th>
                    </tr>
                  </thead>
                  
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div style={{textAlign:"center"}}>Chức năng đang được cập nhật</div> */}
      </Container>

    )
  }
}
// const Tables = () => (
//   <Container fluid className="main-content-container px-4">
//     {/* Page Header */}
//     <Row noGutters className="page-header py-4">
//       <PageTitle sm="4" title="History table" subtitle="" className="text-sm-left" />
//     </Row>

//     {/* Default Light Table */}
//     <Row>
//       <Col>
//         <Card small className="mb-4">
//           <CardHeader className="border-bottom">
//             <h6 className="m-0">Active Users</h6>
//           </CardHeader>
//           <CardBody className="p-0 pb-3">
//             <table className="table mb-0">
//               <thead className="bg-light">
//                 <tr>
//                   <th scope="col" className="border-0">
//                     #
//                   </th>
//                   <th scope="col" className="border-0">
//                     First Name
//                   </th>
//                   <th scope="col" className="border-0">
//                     Last Name
//                   </th>
//                   <th scope="col" className="border-0">
//                     Country
//                   </th>
//                   <th scope="col" className="border-0">
//                     City
//                   </th>
//                   <th scope="col" className="border-0">
//                     Phone
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>Ali</td>
//                   <td>Kerry</td>
//                   <td>Russian Federation</td>
//                   <td>Gdańsk</td>
//                   <td>107-0339</td>
//                 </tr>
//                 <tr>
//                   <td>2</td>
//                   <td>Clark</td>
//                   <td>Angela</td>
//                   <td>Estonia</td>
//                   <td>Borghetto di Vara</td>
//                   <td>1-660-850-1647</td>
//                 </tr>
//                 <tr>
//                   <td>3</td>
//                   <td>Jerry</td>
//                   <td>Nathan</td>
//                   <td>Cyprus</td>
//                   <td>Braunau am Inn</td>
//                   <td>214-4225</td>
//                 </tr>
//                 <tr>
//                   <td>4</td>
//                   <td>Colt</td>
//                   <td>Angela</td>
//                   <td>Liberia</td>
//                   <td>Bad Hersfeld</td>
//                   <td>1-848-473-7416</td>
//                 </tr>
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>

//   </Container>
// );

export default Tables;
