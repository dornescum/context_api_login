import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import {useState} from "react";
import Profile from "./components/Profile";
import {LoginContext} from "./context/LogginContext";

function App() {
    const [showProfile, setShowProfile]= useState(false);
    const [username, setUsername] = useState('');

// App este parintele.aici declar toate "state" NU IN COMPONENTE si le dau in jos
    return (
    <div className="App">
        <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
            {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>


    </div>
  );
}

export default App;
