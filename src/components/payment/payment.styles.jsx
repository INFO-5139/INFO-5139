import styled from 'styled-components';

export const PaymentFormWrapper = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.3rem 0 0.3rem 0;
  margin-bottom: 2rem;
`;

export const SubmitPaymentButton = styled.button`
  background-color: ${(props) => props.colors.solidButtonColor};
  border-radius: 25px;
  border: none;
  padding: 1rem 0 1rem 0;
  color: ${(props) => props.colors.solidButtonColorText};
  margin-left: 2vw;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  // margin-bottom: 120%;
  width: 10%;
  text-align: center;
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

export const FieldWrapper = styled.div`
  width: 30%;
  font-weight: bold;
  color: ${(props) => props.colors.textColor};
`;
