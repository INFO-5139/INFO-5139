import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 23px 53px;
`;

export const AboutHeading = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: ${(props) => props.colors.textColor};
  max-width: 700px;
  line-height: 1;
  margin-bottom: 30px;
  span {
    color: ${(props) => props.colors.textHighlight};
  }
`;

export const AboutParagraph = styled.p`
  font-size: 20px;
  color: ${(props) => props.colors.textColor};
`;
