import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  background-color: ${(props) => props.colors.solidButtonColor};
  color: ${(props) => props.colors.solidButtonColorText};
  border-radius: 30px;
  padding: 14px 70px;
  font-size: 24px;
  cursor: pointer;
  margin-top: 10%;
  margin-bottom: 20%;
`;
