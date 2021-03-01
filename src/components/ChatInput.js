import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {
	const [input, setInput] = useState('');

	const send = (e) => {
		// this function will be called by the button send
		e.preventDefault(); //preventDefault command will not refresh the page as it usally does by default!
		if (!input) return;
		sendMessage(input);
		setInput('');
	};
	return (
		<Container>
			<InputContainer>
				<form>
					<input
						onChange={(e) => setInput(e.target.value)} // we change the input every time we type
						type='text'
						value={input}
						placeholder='Message here...'
					/>
					<SendButton type='submit' onClick={send}>
						{/* we use the submit here because it will allow us to hit the enter.  */}
						<Send />
					</SendButton>
				</form>
			</InputContainer>
		</Container>
	);
}
{
	/* we use a form because it will allow us to call a function on the
					submit, otherwise we'll have to add lots of functionality. */
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

const SendButton = styled.button`
	background: #007a5a;
	border-radius: 2px;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	cursor: pointer;
	border: none;
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
