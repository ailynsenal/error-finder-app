import styled from 'styled-components';

export const ConfirmationWrapper = styled.div `
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  .button-wrapper {
    margin-top: 24px;

    .button {
      margin: 24px;
      color: #30A2FF;
      border-color: #30A2FF;
      width: 100px;
    }

    button:hover {
      background-color: #CDE8FF;
    }
  }
`;