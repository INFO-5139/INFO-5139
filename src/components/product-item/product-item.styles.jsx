/** @format */

import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  transition: all 0.3s;
  background-color: ${(props) => props.colors.productItemBackground};
  max-width: 325px;
`;

export const ProductImageContainer = styled.div`
  max-height: 220px;
  width: 100%;
  overflow: hidden;
`;

export const ProductItemTitle = styled.h4`
  transition: all 0.3s;

  font-size: 24px;
  margin-left: 14px;
  margin-top: 10px;
  color: ${(props) => props.colors.textColor};
`;

export const CategoriesContainer = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 10px 14px;

  span {
    transition: all 0.3s;
    background-color: ${(props) => props.colors.tagColor};
    padding: 6px 8px;
    font-size: 10px;
  }
`;

export const ProductPrice = styled.p`
  transition: all 0.3s;
  margin-left: 14px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.colors.textColor};
`;

export const ItemButton = styled.button`
  transition: all 0.3s;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.colors.solidButtonColor};
  color: ${(props) => props.colors.solidButtonColorText};
  font-weight: 700;
  font-size: 24px;
  border: none;
  padding: 10px 0;
  margin-top: 13px;
`;

export const SalePricesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  /* margin-bottom: 13px; */

  p.old-price {
    transition: all 0.3s;
    font-size: 20px;
    text-decoration: line-through;
    color: ${(props) => props.colors.textColor} !important;
  }
`;

export const ProductQuantity = styled.span`
  transition: all 0.3s;
  padding: 0.5rem 0 0 0.9rem;
  display: flex;
  font-size: 20px;
  color: ${(props) => props.colors.textColor};
`;
