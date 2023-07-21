import styled from 'styled-components';

export const QuestionCardWrapper = styled.div `
	padding: 30px 0;
	color: #30A2FF;
	width: 600px;

	.subtitle {
		text-transform: uppercase;
		font-weight: 700;
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

export const QuestionCardHeader = styled.div `
  display: flex;
  flex-direction: column;
	color: #30A2FF;
	padding: 30px;
`;

export const ButtonWrapper = styled.div `
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
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
`;