import React from "react";
import { Col, FormCheckbox, Row } from "shards-react";
import { decode_encode_string, decode_control_string_firebase } from '../func-helper/funcHelper';
import { database } from "../../database/firebase";

class ToggleButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedPump: true,
      checkedMode: true,
      checked: false,
      getValControl: '',
    };
  }

  getDataFirebase = (path, state) => {
    database.ref(`/${path}`).on('value', (snapshot) => {
      localStorage.setItem('getValControl', snapshot.val());
      switch (state) {
        case 'getValControl':
          return (
            this.setState({
              getValControl: snapshot.val(),
              checkedPump: this.getValControlRealTime(snapshot.val())
            })
          )
      }
    });
  }

  componentDidMount() {
    this.getDataFirebase('control-code', 'getValControl');
  }

  handleChangeMode = () => {
    let code = "*m0#m*c1#c*p0#p";
    const { getValControl } = this.state;
    this.setState({
      checkedMode: !this.state.checkedMode
    });
    let mode = decode_encode_string(getValControl, "mode", this.state.checkedMode ? 0 : 1);
    database.ref("control-code").set(mode);
  }

  handleChangePump = (e) => {
    let code = "*m0#m*c1#c*p0#p";
    const { getValControl, checkedPump } = this.state;
    this.setState({
      checkedPump: !this.state.checkedPump
    });
    let pump = decode_encode_string(getValControl, "pump", checkedPump ? 0 : 1);
    database.ref("control-code").set(pump);
  }

  getValControlRealTime = (data) => {
    let checkPump_internal = true;
    if (data != "") {
      let arrData = decode_control_string_firebase(data);
      if (parseInt(arrData[2]) == 1) {
        checkPump_internal = true;
      }
      else {
        checkPump_internal = false;
      }
    }
    return checkPump_internal;
  }

  render() {
    const { hideLogoText } = this.props;
    const { checkedMode, checkedPump } = this.state;
    return (
      <div>
        <Row>
          <Col>
            <strong className="text-muted d-block mb-2">Mode</strong>
            <fieldset>
              <FormCheckbox
                toggle
                small
                disabled={true}
              // checked={checkedMode}
              // onChange={this.handleChangeMode}
              >
                <span>{checkedMode ? <span style={{ color: 'blue' }}>ON</span> : <span style={{ color: 'red' }}>OFF</span>}</span>
              </FormCheckbox>
            </fieldset>
          </Col>
          <Col >
            <strong className="text-muted d-block mb-2">Pump</strong>
            <fieldset>
              <FormCheckbox
                toggle
                small
                checked={checkedPump}
                onChange={this.handleChangePump}>
                <span>{checkedPump ? <span style={{ color: 'blue' }}>ON</span> : <span style={{ color: 'red' }}>OFF</span>}</span>
              </FormCheckbox>
            </fieldset>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ToggleButtons;
