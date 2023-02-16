import styled from "styled-components";

export const ProductItemContainer = styled.div`
  background-color: #f9f9f9;
  max-width: 335px;
`;

export const ProductImageContainer = styled.div`
  max-height: 220px;
  overflow: hidden;
`;

export const ProductItemTitle = styled.h4`
  font-size: 24px;
  margin-left: 14px;
  margin-top: 10px;
`;

export const CategoriesContainer = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 10px 14px;

  span {
    background-color: #c2edbf;
    padding: 6px 8px;
    font-size: 10px;
  }
`;

export const ProductPrice = styled.p`
  margin-left: 14px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 13px;
`;

export const ItemButton = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #388b37;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  border: none;
  padding: 10px 0;
`;
