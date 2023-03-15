import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 26.5%;
  overflow: hidden;
  margin-right: 7%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const CartItemName = styled.div`
  font-size: 22px;
  max-width: 160px;
  margin-right: 5%;
  width: 160px;
`;

export const CartItemPrice = styled.div`
  font-size: 22px;
  margin-right: 11%;
  width: 20px;
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  margin-right: 11%;
  gap: 5px;
  align-items: center;
  font-size: 22px;
`;

export const ChangeQuantityButton = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.colors.solidButtonColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  text-align: center;
`;

export const TrashButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
