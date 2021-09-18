import React, {useState, useContext} from 'react';
import {LoginContext} from "../context/LogginContext";

const input = {
	padding: '1rem',
	margin: '1rem'
};

const Login = () => {
	// const [username, setUsername] = useState('');
	// const [showProfile, setShowProfile]= useState(false)

	// desctructurez din LogginContext ce am nevoie sa dau mai departe
	const {setUsername, setShowProfile} = useContext(LoginContext);

	return (
		<>
			<input type="text"
				   placeholder="Username .."
				   onChange={(e) => {
					   setUsername(e.target.value);
				   }}
				   style={input}
			/>
			<input type="text" placeholder="Password" style={input}/>
			<button onClick={() => {
				setShowProfile(true);
			}} style={input}>Log in
			</button>


			{/*<button  style={input}>Log in</button>*/}
			{/*{showProfile && <h1>{username}</h1>}*/}

		</>
	);
};

export default Login;