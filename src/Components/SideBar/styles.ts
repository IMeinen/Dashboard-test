import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-right: 1px solid #e9ecef;

  .button-label {
    font-weight: bold;
    
  }

  .MuiButton-root {
    display: flex;
    justify-content: flex-start;
    width: 300px;
  }

  
  .MuiIconButton-root{
    display: none;
    position: absolute;
    top: 24px;
    right: 0.4em;
    @media only screen and (max-width: 64em) {
      display: block;
    }
  } 

  @media only screen and (max-width: 64em) {
    display: flex;
    height: 200px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);

    img {
      width: 180px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  @media only screen and (max-width: 64em) {
    display: none;
  }
`;

export const UserInfos = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;

  @media only screen and (max-width: 64em) {
    * {
      display: none;
    }
  }

  .user-contacts {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 8px;

    .user-name{
      font-weight: bolder;
      font-size: 16px;
      margin-bottom: 4px;
    }

    .user-email{
      font-size: 12px;
      color: #6c757d;
    }

    
  }
`;