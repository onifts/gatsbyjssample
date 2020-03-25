import React from "react"

import('firebase').then(firebase => {
  
    const config = {
      apiKey: "AIzaSyB-d5WYKjEgD-mHA83S2k_klBtkn3zGvEU",
      authDomain: "onifts.firebaseapp.com",
      databaseURL: "https://onifts.firebaseio.com",
      projectId: "onifts",
      storageBucket: "onifts.appspot.com",
      messagingSenderId: "74171019504",
      appId: "1:74171019504:web:54e7c80beae8c287de5235",
      measurementId: "G-HKF2RDLQ8N"
    };
  
    firebase.initializeApp(config);
  
    const messaging = firebase.messaging();
  
      messaging.requestPermission()
      .then(function() {
          console.log('허가!');
          return messaging.getToken(); //토큰을 받는 함수를 추가!
      })
      .then(function(token) {
          console.log(token); //토큰을 출력!
      })
      .catch(function(err) {
          console.log('fcm에러 : ', err);
      })
  
      messaging.onMessage(function(payload){
  
          console.log('---------------->')
          
          console.log(payload.notification.title);
          console.log(payload.notification.body);
    })
  
});

function Component() {
  
    const [data, setData] = React.useState(null)
    
    return <div>{data ? data : "Loading..."}</div>
}

export default Component