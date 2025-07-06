import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCX9kC2KbnAx0MgsL3Bd5MzNR26IkPNkMo",
  authDomain: "vibaai.firebaseapp.com",
  projectId: "vibaai",
  storageBucket: "vibaai.appspot.com",
  messagingSenderId: "395813603478",
  appId: "1:395813603478:web:ccdad9e3745dd936c8dab7",
  measurementId: "G-L4D6JWD0RM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
