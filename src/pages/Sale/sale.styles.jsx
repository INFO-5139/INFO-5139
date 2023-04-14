import styled from 'styled-components';

export const SalePageContainer = styled.div`
  padding: 23px 53px;
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
