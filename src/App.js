import { useState } from 'react';
import SecretInfo from './scenes/SecretInfo.jsx';
import Login from './scenes/Login.jsx';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    {isLoggedIn
    ?<SecretInfo />
    : <Login setIsLoggedIn={setIsLoggedIn} />
    }

    </>
  );
}

export default App;
