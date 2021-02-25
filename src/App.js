import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase';

function App() {
	const [rooms, setRooms] = useState([]); //why is my setRooms blue and Naz has it yellow?

	const getChannels = () => {
		db.collection('rooms').onSnapshot((snapshot) => {
			setRooms(
				snapshot.docs.map((doc) => {
					return { id: doc.id, name: doc.data().name }; //return the data for every singel element
				})
			);
		});
	};

	useEffect(() => {
		getChannels();
	}, []);

	return (
		<div className='App'>
			<Router>
				<Container>
					<Header />
					<Main>
						<Sidebar rooms={rooms} />{' '}
						{/* like this we pass data from App to Sidebar */}
						<Switch>
							<Route path='/room'>
								<Chat />
							</Route>
							<Route path='/'>
								<Login />
							</Route>
						</Switch>
					</Main>
				</Container>
			</Router>
		</div>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-rows: 38px auto;
`;

const Main = styled.div`
	background: white;
	display: grid;
	grid-template-columns: 260px auto;
`;
