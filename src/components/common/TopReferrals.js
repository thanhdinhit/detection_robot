import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
} from "shards-react";
import update from 'react-addons-update';
import { decode_string_firebase, decode_control_string_firebase } from "../func-helper/funcHelper";
import { database } from "../../database/firebase";

class TopReferrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getVal_EVN_InFireStore: '',
      getVal_Con_InFireStore: '',
      referralData: [
        {
          title: "Chế đô hoạt động",
          value: "Điều khiển"
        },
        {
          title: "Vị trí di chuyển",
          value: "Dừng"
        },
        {
          title: "Chế độ hoạt động bơm",
          value: "Đang tắt"
        },
        {
          title: "Ánh sáng",
          value: "0 lux"
        },
        {
          title: "Nhiệt độ",
          value: "0 *c"
        },
        {
          title: "Độ ẩm",
          value: "0 %"
        },
        {
          title: "Khoảng cách vật cản",
          value: "0 cm"
        }
      ]
    };
  }

  getDataFirebase = (path, state) => {
    database.ref(`/${path}`).on('value', (snapshot) => {
      switch (state) {
        case 'getVal_EVN_InFireStore':
          return (
            this.setState({
              getVal_EVN_InFireStore: snapshot.val(),
            }, () => {
              this.setValueEVN();
            })
          )
        case 'getVal_Con_InFireStore':
          return (
            this.setState({
              getVal_Con_InFireStore: snapshot.val(),
            }, () => {
              this.setValueEVN();
            })
          )
      }
    });
  }

  setValueEVN = () => {
    const { getVal_EVN_InFireStore, getVal_Con_InFireStore } = this.state;
    let val_env = decode_string_firebase(getVal_EVN_InFireStore);
    let val_control = decode_control_string_firebase(getVal_Con_InFireStore);
    if (val_control != undefined && val_control != undefined) {
      this.setState(update(this.state, {
        referralData: {
          [1]: {
            $set: {
              title: "Vị trí di chuyển",
              value: val_control[1] == 0 ? "Dừng" : (val_control[1] == 1 ? "Tới" : (val_control[1] == 2 ? "Lui" : (val_control[1] == 3 ? 'Phải' : 'Trái')))
            }
          },
          [2]: {
            $set: {
              title: "Chế độ hoạt động bơm",
              value: val_control[2] == 1 ? 'Đang bật' : 'Đang tắt'
            }
          },
          [3]: {
            $set: {
              title: "Ánh sáng",
              value: val_env[3] + " lux",
            }
          },
          [4]: {
            $set: {
              title: "Nhiệt độ",
              value: val_env[0] + " *C",
            }
          },
          [5]: {
            $set: {
              title: "Độ ẩm",
              value: val_env[1] + " %",
            }
          },
          [6]: {
            $set: {
              title: "Khoảng cách vật cản",
              value: val_env[2] + " cm",
            }
          }
        }
      }));
    }
  }

  componentDidMount() {
    this.getDataFirebase('env-code', 'getVal_EVN_InFireStore');
    this.getDataFirebase('control-code', 'getVal_Con_InFireStore');
  }

  render() {
    return (
      <div>
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">Thông số hệ thống</h6>
            <div className="block-handle" />
          </CardHeader>

          <CardBody className="p-0">
            <ListGroup small flush className="list-group-small">
              {this.state.referralData.map((item, idx) => (
                <ListGroupItem key={idx} className="d-flex px-3">
                  <span className="text-semibold text-fiord-blue">{item.title}</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">
                    {item.value}
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
          <CardFooter className="border-top">
          </CardFooter>
          <CardBody>
            <a href="" >Load more ....</a>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default TopReferrals;
