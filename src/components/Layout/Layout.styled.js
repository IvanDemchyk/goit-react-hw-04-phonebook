import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(26, 165, 21, 0.648);
  max-width: 380px;
  margin: 0 auto;
  border: 1px solid rgba(8, 23, 7, 0.648);
  border-radius: 20px;
  box-shadow: rgba(87, 89, 87, 0.648) 0px 1px 3px;
`;

export const MainTitle = styled.h1`
  width: 240px;
  height: auto;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto 10px;
  text-align: center;
`;

export const ListTitle = styled.h2`
  width: 240px;
  height: auto;
  font-size: 24px;
  font-weight: 500;
  margin: 15px auto 10px;
  text-align: center;
`;
