import styled from 'styled-components';

export const ThemeButton = styled.button`
  color: ${(props) => props.colors.solidButtonColorText};
  background-color: ${(props) => props.colors.solidButtonColor};
  border: none;
  margin-left: 1rem;
  padding: 0.6rem 2rem 0.6rem 2rem;
  border-radius: 25px;
  font-size: 22px;
`;
