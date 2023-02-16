import styled from "styled-components";

export const NavigationContainer = styled.ul`
  list-style: none;
  display: flex;
  ${(props) => (props.align === "center" ? "justify-content: center" : "")}
`;

export const NavigationListItem = styled.li`
  font-size: 22px;
  &:not(:last-of-type) {
    margin-right: 40px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.color};
    position: relative;

    &::after {
      background-color: ${(props) => props.color};
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      transition: all 0.4s;
      width: 0;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
