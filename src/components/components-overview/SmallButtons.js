import React from "react";
import { Row, Col, Button } from "shards-react";
import { decode_encode_string } from "../func-helper/funcHelper";
import { database } from "../../database/firebase";

class SmallButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getValControl: '',
    };

    this.handleChange = this.changeMove.bind(this);
  }
  changeMove(val) {
    const { getValControl } = this.state;
    let move = decode_encode_string(getValControl, "control", Number(val));
    database.ref("control-code").set(move);
  }

  getDataFirebase = (path, state) => {
    database.ref(`/${path}`).on('value', (snapshot) => {
      switch (state) {
        case 'getValControl':
          return (
            this.setState({
              getValControl: snapshot.val(),
            })
          )
      }
    });
  }

  componentDidMount() {
    this.getDataFirebase('control-code', 'getValControl');
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
          </Col>
          <Col >
            <div>
              <Button
                size="sm"
                theme="primary"
                onClick={() => this.changeMove('1')}>
                Go Ahead
          </Button>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
        <div style={{ marginTop: "10px" }}>
          <Row  >
            <Col>
              <Button
                size="sm"
                theme="primary"
                onClick={() => this.changeMove('4')}>
                Turn Left
        </Button>
            </Col>
            <Col>
              <div style={{ marginLeft: '13px' }}>
                <Button
                  size="sm"
                  theme="primary"
                  onClick={() => this.changeMove('0')}>
                  Stop
                </Button>
              </div>
            </Col>
            <Col>
              <Button
                size="sm"
                theme="primary"
                onClick={() => this.changeMove('3')}>
                Turn Right
        </Button>
            </Col>
          </Row>
        </div>
        <Row style={{ marginTop: "10px" }}>
          <Col>
          </Col>
          <Col>
            <div style={{marginLeft:'5px'}}>
              <Button
                size="sm"
                theme="primary"
                onClick={() => this.changeMove('2')}>
                Go Back
          </Button>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SmallButtons;


