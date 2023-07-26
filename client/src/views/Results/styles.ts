import styled from 'styled-components';

export const ResultWrapper = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;

	h4 {
		text-transform: uppercase;
	}

	span {
		padding: 18px 24px;
	}
`;

export const UserAnswers = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: inherit;
	border: 0.5px solid rgb(48, 162, 255, .2);
	border-left: unset;
  border-right: unset;

	:not(:last-child) {
		border-bottom: unset;
	}

	.answer {
		font-weight: 600;
	}
`;

export const HomeButtonWrapper = styled.div`
  padding: 35px;
  text-align: center;
  font-size: 12px;
`;