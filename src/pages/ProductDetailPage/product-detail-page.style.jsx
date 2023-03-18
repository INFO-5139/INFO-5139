import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6%;

  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const ProductItem = styled.div`
  margin: 5% 0;
 
`;

export const ProductItemTitle = styled.h4`
  color: ${(props) => props.colors.textColor};
  font-size: 2.5em;
  margin-bottom: 10px;
  display: flex;
`;

export const ProductImageContainer = styled.div`
  max-height: 220px;
  overflow: hidden;
`;

export const ProductPrice = styled.p`
  color: ${(props) => props.colors.textColor};
  font-size: 20px;
  font-weight: 700;
  margin-top: 1%;
`;

export const SalesPrice = styled.p`
  color: red;
  font-size: 20px;
  font-weight: 700;
  margin-top: 1%;
`;


export const ProductDescription = styled.p`
  color: ${(props) => props.colors.textColor}; 
  width: 500px;
  height: 400px;
  margin-top: 5rem;
 
 
`;

export const RatingContainer = styled.div`
display: flex;
justify-content: space-between;
`
