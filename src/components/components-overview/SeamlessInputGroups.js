import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button,
  Modal, ModalBody, ModalHeader
} from "shards-react";

class SeamlessInputGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: {
        braking_distance: '',
        ssid: '',
        pass: '',
        speed: '',
        time_send: '',
        shut_off_pump: '',
        greetings_txt: '',
        open: false,
      }
    };
  }
  changeParam = (e, name) => {
    console.log(name, e.target.value);
    const {
      target: { value },
    } = e;
    const { inputValue } = this.state;
    inputValue[name] = value;
    this.setState({
      inputValue,
    });
  }
  saveValue = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <strong className="text-muted d-block mb-2">
          Braking distance (cm)
      </strong>
        <InputGroup seamless className="mb-3">
          <FormInput
            type="number"
            onChange={(e) => this.changeParam(e, 'braking_distance')}
          />
        </InputGroup>
        <strong className="text-muted d-block mb-2">
          SSID
      </strong>
        <InputGroup seamless className="mb-3">
          <FormInput
            onChange={(e) => this.changeParam(e, 'ssid')}
          />
        </InputGroup>
        <strong className="text-muted d-block mb-2">
          Password
      </strong>
        <InputGroup seamless className="mb-3">
          <FormInput
            onChange={(e) => this.changeParam(e, 'pass')}
          />
        </InputGroup>
        <strong className="text-muted d-block mb-2">
          Speed
      </strong>
        <InputGroup seamless className="mb-3">
          <FormInput
            type="number"
            onChange={(e) => this.changeParam(e, 'speed')}
          />
        </InputGroup>
        <strong className="text-muted d-block mb-2">
          Time to send data
      </strong>
        <InputGroup seamless className="mb-3">
          <FormInput
            type="number"
            onChange={(e) => this.changeParam(e, 'time_send')}
          />
        </InputGroup>
        <div style={{ textAlign: "center" }}>
          {/* <Button theme="white" onClick={() => this.saveValue()}>Save</Button> */}
          <Button theme="white">Save</Button>
        </div>
        <Modal open={open} toggle={this.saveValue}>
          <ModalHeader>Notification</ModalHeader>
          <ModalBody>Chức năng đang được cập nhật</ModalBody>
        </Modal>
      </div>
    )
  }
}

export default SeamlessInputGroups;
