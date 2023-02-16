import styled from "styled-components";

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
  color: #333;
  max-width: 700px;
  line-height: 1;
  margin-bottom: 30px;

  span {
    color: #388b37;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
`;

export const PrimaryButton = styled.button`
  border: none;
  background-color: #388b37;
  color: #fff;
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
`;
