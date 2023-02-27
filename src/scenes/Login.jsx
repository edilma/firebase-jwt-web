import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD-yzsyUpKdwmfukTBeEN1rq8oxHOITiVQ",
    authDomain: "fir-jwt-er.firebaseapp.com",
    projectId: "fir-jwt-er",
    storageBucket: "fir-jwt-er.appspot.com",
    messagingSenderId: "999764290817",
    appId: "1:999764290817:web:07067ad8d2ce9a75ae7f00"
  };


export default function Login({setIsLoggedIn}){

    const handleSignin= ()=>{
        //conect to firebase project
        const app = initializeApp(firebaseConfig);
        //connect to auth
        const auth = getAuth(app);
        //create a provider
        const provider = new GoogleAuthProvider();
        //popup signup window
        signInWithPopup(auth, provider)
        //handle .then and .catch
        .then(()=> setIsLoggedIn(true))
        .catch(alert)
    }

    return(
        <>
        <h1>Login</h1>
        <button onClick={handleSignin}>Sign in with Google</button>
        </>
    )
}