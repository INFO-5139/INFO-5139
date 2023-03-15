import styled from 'styled-components';

export const FooterContainer = styled.footer`
  transition: all 0.3s;
  background-color: ${(props) => props.colors.backdropColor};
  padding: 70px 0;
`;

export const SocialsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  a {
    transition: all 0.3s;
    color: ${(props) => props.colors.solidButtonColor};
  }
`;
