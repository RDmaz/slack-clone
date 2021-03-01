import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';

function Chat({ user }) {
	let { channelId } = useParams();
	const [channel, setChannel] = useState(); //in order to use the data in the channel we use this useState
	const [messages, setMessages] = useState([]); //this is where will save the data... in the state

	const getMessages = () => {
		db.collection('rooms')
			.doc(channelId)
			.collection('messages')
			.orderBy('timestamp', 'asc') //here we set in which order we want to keep the messages, asc=ascending
			.onSnapshot((snapshot) => {
				let messages = snapshot.docs.map((doc) => doc.data());
				setMessages(messages); //we will pas it so in the state
			});
	};
	// we call this function(sendmessage) in te ChatInput bellow (line 80)
	const sendMessage = (text) => {
		if (channelId) {
			// payload is the data of the text messahge
			let payload = {
				text: text,
				timestamp: firebase.firestore.Timestamp.now(),
				user: user.name,
				userImage: user.photo,
			};
			db.collection('rooms').doc(channelId).collection('messages').add(payload);
		}
	};

	const getChannel = () => {
		db.collection('rooms')
			.doc(channelId)
			.onSnapshot((snapshot) => {
				//with the onSnapshot we get the data individualy. it is the ata of the channel.

				setChannel(snapshot.data()); // with this line the chat.js will have the data
			});
	};
	// we need to call the getChannel every time we change the channel ID. therefor we use the useEffect
	useEffect(() => {
		getChannel();
		getMessages();
	}, [channelId]); // this will listen to the changes in the changeID, when ever the Parm changes it wil fire.

	return (
		<Container>
			<Header>
				<Channel>
					<ChannelName># {channel && channel.name}</ChannelName>
					<ChannelInfo>
						Company-wide announcements and work-based matters
					</ChannelInfo>
				</Channel>
				<ChannelDetails>
					<div>Details</div>
					<Info />
				</ChannelDetails>
			</Header>
			<MessageContainer>
				{/* we can't use if JSX so we either use the turnery or this && for condition  */}
				{messages.length > 0 &&
					messages.map((data, index) => (
						<ChatMessage
							text={data.text}
							name={data.user}
							image={data.userImage}
							timestamp={data.timestamp}
						/> // in order to use real datra of chats and not static one , we pas in the props of the data.
					))}
			</MessageContainer>
			<ChatInput sendMessage={sendMessage} />
		</Container>
	);
}

{
	/* We had to remove the <InfoOutlinedIcon /> otherwise we'll have two Icons!		 */
}
{
	/* <ChatInput></ChatInput>   because we have lots of functionality in it we create a separate component for it. */
}
export default Chat;

const Container = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
	min-height: 0;
`;
const Channel = styled.div``;
const ChannelDetails = styled.div`
	display: flex;
	align-items: center;
	color: #606060;
`;
const ChannelName = styled.div`
	font-weight: 700;
`;
const ChannelInfo = styled.div`
	font-weight: 400;
	color: #606060;
	font-size: 13px;
	margin-top: 8px;
`;
const Info = styled(InfoOutlinedIcon)`
	margin-left: 10px;
`;
// this is styled the Icon, it imports the Icon and applies the css individualy to the icon.
const Header = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid rgba(83, 39, 83, 0.13);
	justify-content: space-between;
`;
const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;

// const ChatInput = styled.div``;  deleted it
