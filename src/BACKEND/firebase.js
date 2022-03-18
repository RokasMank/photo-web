// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp ( {
    apiKey: "AIzaSyCby9O5f2SFObgoQ8_HbQSjdFxDdZK_JWo",
    authDomain: "j-maz-photos.firebaseapp.com",
    projectId: "j-maz-photos",
    storageBucket: "j-maz-photos.appspot.com",
    messagingSenderId: "1085255578125",
    appId: "1:1085255578125:web:6eb2761e2cb4a72e965b44",
    measurementId: "G-6XCMBC4Z3V"
  });
 
  
export const imageStorage = firebase.storage();
  //export{storage, firebase as default };
  export default firebase;