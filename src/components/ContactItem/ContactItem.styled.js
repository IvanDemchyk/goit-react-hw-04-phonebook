import styled from 'styled-components';

export const Item = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const DelBtn = styled.button`
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: rgb(161, 240, 226);
  color: rgb(53, 62, 66);
  border: 1px solid rgba(32, 26, 26, 0.715);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: rgba(87, 89, 87, 0.648) 0px 1px 3px;
  }
  &:focus {
    background-color: rgb(15, 126, 106);
  }
`;
