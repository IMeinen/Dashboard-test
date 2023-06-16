import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;

  span {
    margin-left: 8px;
    font-size: 12px;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  
`;