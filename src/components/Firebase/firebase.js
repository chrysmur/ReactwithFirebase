
import 'process'
import firebase from 'firebase/app'

const Config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN ,
    databaseURL:process.env.DATABASE_URL,
    projectId: "learnproject-dd1cb",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };

  class Firebase {
    constructor(){
      firebase.initializeApp(Config)    }
  }
  export default Firebase