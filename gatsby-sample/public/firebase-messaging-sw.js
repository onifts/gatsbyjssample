importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyB-d5WYKjEgD-mHA83S2k_klBtkn3zGvEU", // project - web api key 
    //authDomain: "onifts.firebaseapp.com",
    //databaseURL: "https://onifts.firebaseio.com",
    projectId: "onifts",
    //storageBucket: "onifts.appspot.com",
    messagingSenderId: "74171019504", // project - cloud messaging - sender id 
    appId: "1:74171019504:web:54e7c80beae8c287de5235", // app id 
});

const messaging = firebase.messaging();

self.addEventListener('push', function(event) { // when get push message 
    
    const payload = event.data.json();

    const title = payload.notification.title;
    
    const options = {
        body: payload.notification.body,
        icon: payload.notification.icon,
        data: payload.notification.click_action
    };

    event.waitUntil(self.registration.showNotification(title, options)); // show message pop 

});

self.addEventListener('notificationclick', function(event) { // when click push message pop 

    console.log(event.notification);
    
    event.notification.close();
    
    event.waitUntil(
        
        clients.openWindow(event.notification.data) // open app 

    );

});