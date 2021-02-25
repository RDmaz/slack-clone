import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
	return (
		<Container>
			<Header>
				<Channel>
					<ChannelName># Clever</ChannelName>
					<ChannelInfo>
						Company-wide announcements and work-based matters
					</ChannelInfo>
				</Channel>
				<ChannelDetails>
					<div>Details</div>
					<Info />
					{/* We had to remove the <InfoOutlinedIcon /> otherwise we'll have two Icons!		 */}
				</ChannelDetails>
			</Header>
			<MessageContainer>
				<ChatMessage />
			</MessageContainer>
			<ChatInput />
			{/* <ChatInput></ChatInput>   because we have lots of functionality in it we create a separate component for it. */}
		</Container>
	);
}

export default Chat;

const Container = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
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
`; // this is styled the Icon, it imports the Icon and applies the css individualy to the icon.
const Header = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid rgba(83, 39, 83, 0.13);
	justify-content: space-between;
`;
const MessageContainer = styled.div``;
// const ChatInput = styled.div``;  deleted it
