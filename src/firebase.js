import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8Y81zdP8-vaScwsnoS1h8SrgFeFpPO08",
  authDomain: "auth-55e03.firebaseapp.com",
  projectId: "auth-55e03",
  storageBucket: "auth-55e03.appspot.com",
  messagingSenderId: "7586429750",
  appId: "1:7586429750:web:eb5d8d1ca9e19ff4345197"
};
  // check
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export default app
