import styled from 'styled-components';

export const HomePageContainer = styled.div`
  padding: 23px 53px;
`;

export const CTAContainer = styled.div`
  p {
    max-width: 600px;
    margin-bottom: 30px;
  }
`;

export const FirstScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const HeadingOne = styled.h1`
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

export const Paragraph = styled.p`
  font-size: 20px;
  color: ${(props) => props.colors.textColor};
`;

export const PrimaryButton = styled.button`
  border: none;
  background-color: ${(props) => props.colors.solidButtonColor};
  color: ${(props) => props.colors.solidButtonColorText};
  border-radius: 30px;
  padding: 14px 70px;
  font-size: 24px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
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
  }
`;

export const HeadingTwo = styled.h2`
  font-size: 42px;
  margin-bottom: 25px;
  color: ${(props) => props.colors.textColor};
`;

export const ProductList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SaleButton = styled.button`
  background-color: transparent;
  border: 3px solid ${(props) => props.colors.solidButtonColor};
  border-radius: 30px;
  padding: 14px 70px;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.colors.emptyButtonColorText};
  margin-left: 20px;
  transition: all 0.4s;

  &:hover {
    background-color: ${(props) => props.colors.solidButtonColor};
    color: ${(props) => props.colors.solidButtonColorText};
  }
`;
