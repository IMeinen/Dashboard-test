import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    top: 0;
    width: 300px;

  }

  .title,.subtitle{
    margin-bottom: 16px;
  }
  .subtitle {
    font-size: 16px;
    color: #495057;
  }

  .MuiTextField-root{
    margin-bottom: 8px;
  }

  span {
    margin-top: 8px;
  }

  form{
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
`;

export const ImageContainer = styled.div`
  display: none;
  flex: 1;
  height: 100vh;
  background-color: #FFAD14;
  border-top-left-radius: 45%;

  @media only screen and (min-width: 64em) {
    display: flex;
  }
`;

export const FabContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 240px;
  align-items: center;
  justify-content: space-evenly;
`

export const RadioContainer = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 320px;
  margin-bottom: 16px;
  
  .forgot-password {
    font-weight: bold;
    color: #e5383b;
  }
`