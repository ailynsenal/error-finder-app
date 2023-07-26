import styled from 'styled-components';

export const QuestionWrapper = styled.div `
	width: 400px;
	padding: 30px 0;
	color: #30A2FF;

	.activityName {
		text-transform: uppercase;
	}

	.question {
		padding: 24px;
		margin: 24px 0;
		border-left: 0;
		border-right: 0;
		border: 0.5px solid rgb(48, 162, 255, .5);
		border-left: unset;
		border-right: unset;
	}
`;

export const QuestionHeader = styled.div `
  display: flex;
  flex-direction: column;
	padding: 12px 30px;
`;

export const Buttons = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	font-size: 12px;
	font-weight: 700;

	.choice {
		color: #30A2FF;
		text-transform: uppercase;
		border: none;
		background: unset;
		font-weight: 700;
	}

	button:hover {
		color: #0082EC;
	}
`;