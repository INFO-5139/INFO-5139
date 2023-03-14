/** @format */

import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  background-color: #f9f9f9;
  max-width: 325px;
`;

export const ProductImageContainer = styled.div`
  max-height: 220px;
  width: 100%;
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
  /* margin-bottom: 13px; */
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
  margin-top: 13px;
`;

export const SalePricesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  /* margin-bottom: 13px; */

  p.old-price {
    font-size: 20px;
    text-decoration: line-through;
  }
`;

export const ProductQuantity = styled.span`
  padding: 0.5rem 0 0 0.9rem;
  display: flex;
  font-size: 20px;
`;
