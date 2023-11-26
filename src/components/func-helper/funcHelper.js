/*function encode and decode the code get in firebase
name: decode_encode_string
code: code string
key: key change (note: same as with key in code, example: mode, control,elbow1f, elbow2f,elbow3f, pump )
value: value change
 */
export const decode_encode_string = (code, key, value) => {
    let defaultCode = "*m0#m*c1#c*p0#p";
    let arrKeyCode = ["mode", "control", "pump"];
    let encode = '';
    console.log(code);
    if (code == ""){
        code = defaultCode;
    }
    if (code != null && code.trim() != "") {
        const deocde = code.split('*');
        let mode = deocde[1].substring(1, 2);
        let control = deocde[2].substring(1, 2);
        let pump = deocde[3].substring(1, 2);
        if (arrKeyCode.indexOf(key) > -1) {
            switch (key) {
                case "mode":
                    mode = value;
                    break;
                case "control":
                    control = value;
                    break;
                case "pump":
                    pump = value;
                    break;
                default:
                    break;
            }
        }
        encode = "*m" + mode + "#m*c" + control + "#c*p" + pump + "#p";
    }
    return encode;
}

export const decode_string_firebase = (code) => {
    let arrVal = [];
    if (code != null && code.trim() != "") {
        const deocde = code.split('*');
        let temp = deocde[1].split('#');
        let tempf = temp[0].substring(1);
        arrVal.push(tempf);
        let humi = deocde[2].split('#');
        let humif = humi[0].substring(1);
        arrVal.push(humif);
        let dis = deocde[3].split('#');
        let disf = dis[0].substring(1);
        arrVal.push(disf);
        let light = deocde[4].split('#');
        let lightf = light[0].substring(1);
        arrVal.push(lightf);
        let gas = deocde[5].split('#');
        let gasf = gas[0].substring(1);
        arrVal.push(gasf);
    }
    return arrVal;
}

export const decode_control_string_firebase = (code) => {
    let arrVal = [];
    if (code != null && code.trim() != "") {
        const deocde = code.split('*');
        let mode = deocde[1].substring(1, 2);
        arrVal.push(mode);
        let control = deocde[2].substring(1, 2);
        arrVal.push(control);
        let pump = deocde[3].substring(1, 2);
        arrVal.push(pump);
    }
    return arrVal;
}