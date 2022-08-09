import styled from "styled-components";

export const Container = styled.button`
   color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
   background: none;
   border:0;
   font-size: 1.6rem;
`;