import firebase from "firebase";

const config = {
    apiKey: "oTCeU4UgW3r0Tyw0VV6zoBGvUrajSdmZFzXzdEVK",
    authDomain: "robot-system-0000-default-rtdb.firebaseio.com",
    databaseURL: "https://robot-system-0000-default-rtdb.firebaseio.com",
    projectId: "robot-system-0000",
    storageBucket: "robot-system-0000.appspot.com",
    messagingSenderId: "902453542404"
};
firebase.initializeApp(config);

// export default firebase;
// vì test thử database nên ta export database trong firebase
export const database = firebase.database();