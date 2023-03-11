import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  height: 250px;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid rgba(32, 26, 26, 0.715);
  background-color: rgba(177, 196, 127, 0.715);
  border-radius: 10px;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Field = styled(FormikField)`
  width: auto;
`;

export const SubmitBtn = styled.button`
  border-radius: 20px;
  margin: 0px auto;
  padding: 10px 20px;
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
