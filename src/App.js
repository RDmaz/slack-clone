import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase';
import { auth, provider } from './firebase';

function App() {
	const [rooms, setRooms] = useState([]);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))); // together with the change in Login, the state is gone but it is saved in the local storage.
	const getChannels = () => {
		db.collection('rooms').onSnapshot((snapshot) => {
			setRooms(
				snapshot.docs.map((doc) => {
					return { id: doc.id, name: doc.data().name }; //return the data for every singel element
				})
			);
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			localStorage.removeItem('user'); // we want to remove it also from the local storage
			setUser(null); // we don't want it in the state.
		});
	};

	useEffect(() => {
		getChannels();
	}, []);
	{
		/* like this we pass data from App to Sidebar in the Sidebar component rooms={rooms}*/
		/* after doing the signOut in Header we pas it in in the App.js hier we pas it in the Header cpomp. and write the func. */
		/* when we have more Routes the last path always has to be the route "/" */
	}
	return (
		<div className='App'>
			<Router>
				{!user ? (
					<Login setUser={setUser} />
				) : (
					<Container>
						<Header signOut={signOut} user={user} />
						<Main>
							<Sidebar rooms={rooms} />
							<Switch>
								<Route path='/room/:channelId'>
									<Chat user={user} />
									{/* we had the use in App.js in the state but we need to ps it also in Chat.js therefor we ps it here in. */}
								</Route>
								<Route path='/'>Select or Create Channel</Route>
							</Switch>
						</Main>
					</Container>
				)}
			</Router>
		</div>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
	background: white;
	display: grid;
	grid-template-columns: 260px auto;
`;
