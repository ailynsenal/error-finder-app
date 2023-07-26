import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;

  .title {
    text-align: center;
    height: 30px;
    margin-top: 30px;
  }

  .msg {
    padding: 24px;
  }
`;

export const LoadingWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;

  .loading-text {
    padding: 24px;
  }
`;

export const Header = styled.div `
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-align: center;
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    padding: 18px;
    background: unset;
    color: #30A2FF;
		text-transform: uppercase;
    border: 0.5px solid rgb(48, 162, 255, .2);
    border-left: unset;
    border-right: unset;

    :not(:last-child) {
      border-bottom: unset;
    }

    &:hover {
      background-color: #ABD9FF;
      color: #FFFFFF;
    }
  }
`;

export const ResultButton = styled.div`
  font-size: 12px;
  padding: 35px;
  text-align: center;
  opacity: 0.3;
`;