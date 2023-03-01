import styled from "styled-components";

export const FormStyle = styled.div`
  label {
    display:block;
  }

`;

export const ImageStyle = styled.div`
    overflow: hidden;
    max-width: 450px;
    box-shadow: -20px 20px 3px rgba(0, 0, 0, 0.25);
`;

export const CTAImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  };
`;

export const GridMain = styled.div`

`;