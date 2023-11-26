import React from "react";
import { ListGroupItem, Slider } from "shards-react";
import { decode_encode_string } from "../func-helper/funcHelper";
import { database } from "../../database/firebase";
import { reactLocalStorage } from 'reactjs-localstorage';

class Sliders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elbow1: 0,
      elbow2: 0,
      elbow3: 0,
      // getValControl: '',
    };
  }
  handleChangeARM = (val, type) => {
    let getValControl = localStorage.getItem('getValControl');
    let elbow = '';
    if (type == "elbow1f" || type == "elbow2f" || type == "elbow3f") {
      elbow = (decode_encode_string(getValControl, type, Math.floor(val)));
    } else {
      elbow = (decode_encode_string(getValControl, type, val));
    }
    database.ref("control-code").set(elbow); //control-code
    // localStorage.removeItem('getValControl')
  }

  getDataFirebase = (path, state) => {
    database.ref(`/${path}`).on('value', (snapshot) => {
      if (state == 'getValControl') {
        localStorage.setItem('getValControl', snapshot.val());
      }
    });
  }

  componentDidMount() {
    this.getDataFirebase('control-code', 'getValControl');
  }

  render() {
    return (
      <div>
        <ListGroupItem className="px-3">
          <div className="mb-2 pb-1">
            <strong className="text-muted d-block">Elbow 1</strong>
            <Slider
              theme="success"
              className="my-4"
              connect={[true, false]}
              start={[68]}
              range={{ min: 50, max: 85 }}
              onChange={(val) => this.handleChangeARM(val, 'elbow1f')}
            // tooltips
            />
            <strong className="text-muted d-block">Elbow 2</strong>
            <Slider
              theme=""
              className="my-4"
              connect={[true, false]}
              start={[90]}
              range={{ min: 0, max: 180 }}
              onChange={(val) => this.handleChangeARM(val, 'elbow2f')}
            // tooltips
            />
            <strong className="text-muted d-block">Elbow 3</strong>
            <Slider
              theme="info"
              className="my-4"
              connect={[true, false]}
              start={[90]}
              range={{ min: 0, max: 180 }}
              onChange={(val) => this.handleChangeARM(val, 'elbow3f')}
            // tooltips
            />
            {/* <Slider
        theme="info"
        className="my-4"
        connect={[false, true]}
        start={[15]}
        range={{ min: 0, max: 100 }}
      />
      <Slider
        connect
        start={[35, 65]}
        pips={{
          mode: "positions",
          values: [0, 25, 50, 75, 100],
          stepped: true,
          density: 5
        }}
        range={{ min: 0, max: 100 }}
      /> */}
          </div>
        </ListGroupItem>
      </div>
    )
  }
}

export default Sliders;
