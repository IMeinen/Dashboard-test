import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 64em) {
    padding-top: 50px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  flex: 5;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 24px;

  .table-container-title{
    font-weight: 700;
    margin-bottom: 1em;
  }

  .table-container-subtitle{
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

`;

export const TopButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 0px;
  margin-bottom: 24px;

  @media only screen and (max-width: 64em) {
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;

  }

  button {
    flex: 1;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 16px;
    border: none;
    border-radius: 8px;
	  cursor: pointer;
	  outline: inherit;
    background-color: #FFAD14;

    * {
      color: #fff;
    }
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  flex: 2;
  padding: 32px 24px;
`;

export const DonutContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 24px;

  -webkit-box-shadow: 0px 0px 15px 0px rgba(133,133,133,0.46);
  -moz-box-shadow: 0px 0px 15px 0px rgba(133,133,133,0.46);
  box-shadow: 0px 0px 15px 0px rgba(133,133,133,0.46);

  .donut-container-title{
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .donut-container-subtitle{
    font-size: 12px;
    color: #212529;
  }
`;

export const AnalyticsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex:1;
  height: 150px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const EarningsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 24px;
  margin-top: 64px;
  margin-bottom: 24px;

  -webkit-box-shadow: 0px 0px 15px 0px rgba(133,133,133,0.46);
  -moz-box-shadow: 0px 0px 15px 0px rgba(133,133,133,0.46);
  box-shadow: 0px 0px 15px 0px rgba(133,133,133,0.46);

  @media only screen and (max-width: 64em) {
    margin-top: 0px;
  }

  *{
    margin-bottom: 4px;
  }

  .earnings-container-title {
    color: #495057;
    font-size: 16px;
  }

  .earnings-container-value {
    font-weight: 700;
    font-size: 28px;
  }

  .earnings-container-indicator {
    color: #20bf55;
    font-weight: 700;
    font-size: 12px;
  }
`