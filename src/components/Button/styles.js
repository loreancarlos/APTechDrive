import styled from "styled-components";

export const Container = styled.button`
   background-color: ${({ theme }) => theme.COLORS.ORANGE};
   color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
   font-weight: 500;

   width: 100%;
   height: 5.6rem;
   border: 0;
   padding: 0 1.6rem;
   margin-top: 1.6rem;
   border-radius: 1rem;

   &:disabled{
      opacity: 0.5;
   }
`;