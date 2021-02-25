import React from 'react';
import styled from 'styled-components';

function Chat() {
	return (
		<Container>
			<Header>
				<Channel>
					<ChannelName># Clever</ChannelName>
					<ChannelInfo>Company-wide </ChannelInfo>
				</Channel>
				<ChannelDetails></ChannelDetails>
			</Header>
			<MessageContainer></MessageContainer>
			<ChatInput></ChatInput>
		</Container>
	);
}

export default Chat;

const Container = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
`;
const Channel = styled.div``;
const ChannelDetails = styled.div``;
const ChannelName = styled.div``;
const ChannelInfo = styled.div``;
const Header = styled.div`
	background: orange;
`;
const MessageContainer = styled.div``;
const ChatInput = styled.div``;
