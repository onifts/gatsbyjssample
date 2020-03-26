import React, { useState, useEffect } from 'react';

const FCMSampleComponent = () => {
    
    const [data, setData] = useState(null)

    useEffect(() => {
        
        import('firebase').then(firebase => {
  
            const config = {
              apiKey: "AIzaSyB-d5WYKjEgD-mHA83S2k_klBtkn3zGvEU", // project - web api key 
              //authDomain: "onifts.firebaseapp.com",
              //databaseURL: "https://onifts.firebaseio.com",
              projectId: "onifts",
              //storageBucket: "onifts.appspot.com",
              messagingSenderId: "74171019504", // project - cloud messaging - sender id 
              appId: "1:74171019504:web:54e7c80beae8c287de5235", // app id 
              //measurementId: "G-HKF2RDLQ8N" // ??? 
            };
          
            firebase.initializeApp(config);
          
            const messaging = firebase.messaging();
          
            messaging.requestPermission()
              .then(function() {
                  
                    console.log('허가!');
                    setData('허가!')

                    return messaging.getToken(); //토큰을 받는 함수를 추가!

            })
            .then(function(token) {
                console.log(token); //토큰을 출력!
    
                setData(token)
            })
            .catch(function(err) {

                setData('fcm에러 : ', err)

                console.log('fcm에러 : ', err);
            })
          
              messaging.onMessage(function(payload){
          
                  console.log('---------------->')
                  
                  console.log(payload.notification.title);
                  console.log(payload.notification.body);
            })
          
        });

    },[]); // end useEffect

    return <div>{data ? data : "Loading..."}</div>;

} // end FCMSampleComponent

export default FCMSampleComponent;

