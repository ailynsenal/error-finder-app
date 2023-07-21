import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  min-width: 280px;
`;

export const ActivityButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    padding: 18px;
    width: auto;
    border: 0.5px solid rgb(48, 162, 255, .2);
    background: unset;
    color: #30A2FF;
		text-transform: uppercase;
    border-left: unset;
    border-right: unset;

    :not(:last-child) {
      border-bottom: unset;
    }
  }
`;

export const ResultButtonWrapper = styled.div`
  padding: 35px;
  text-align: center;
  opacity: 0.3;
  font-size: 12px;
`;