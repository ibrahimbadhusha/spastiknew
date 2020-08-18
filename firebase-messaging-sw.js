importScripts('/__/firebase/6.0.4/firebase-app.js');
importScripts('/__/firebase/6.0.4/firebase-messaging.js');
importScripts('/__/firebase/init.js');
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.


importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

firebase.messaging();