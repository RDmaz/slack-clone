import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
	return (
		<Container>
			<InputContainer>
				<form>
					{/* we use a form because it will allow us to call a function on the
					submit, otherwise we'll have to add lots of functionality. */}
					<input type='text' placeholder='Message here...' />
					<SendButton>
						<Send />
					</SendButton>
				</form>
			</InputContainer>
		</Container>
	);
}

export default ChatInput;

const Container = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 24px;
`;

const InputContainer = styled.div`
	border: 1px solid #8d8d8e;
	border-radius: 4px;
	form {
		display: flex;
		height: 42px;
		align-items: center;
		padding-left: 10px;
		input {
			flex: 1;
			// this input is the most importatnt thus it will take as much place as it can
			border: none;
			font-size: 13px;
		}
		input:focus {
			outline: none;
		}
		//removes the blue outline
	}
`;

const SendButton = styled.div`
	background: #007a5a;
	border-radius: 2px;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	cursor: pointer;
	.MuiSvgIcon-root {
		width: 18px;
		// The above line will change the width of the Icon.
	}
	:hover {
		background: #148567;
	}
`;

const Send = styled(SendIcon)`
	color: #d9d9d9;
`;
