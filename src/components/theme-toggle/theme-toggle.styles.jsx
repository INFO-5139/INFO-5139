import styled from 'styled-components';

export const ThemeButton = styled.button`
  color: ${(props) => props.colors.themeToggleIconColor};
  background-color: ${(props) => props.colors.solidButtonColor};
  border: none;
  margin-left: 1rem;
  padding: 0.5rem 2rem 0.3rem 2rem;
  border-radius: 50px;
  font-size: 30px;
`;
