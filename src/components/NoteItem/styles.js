import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;

   background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
   color: ${({ theme }) => theme.COLORS.GRAY_300};

   border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
   margin-bottom: 0.8rem;
   border-radius: 1rem;
   padding-right: 1.2rem;

   >button{
      border: none;
      background: none;
      display: flex;
      align-items: center;
      
      >svg{
         font-size: 2rem;
      }
   }

   .button-add{
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }

   .button-delete{
      color: ${({ theme }) => theme.COLORS.RED};
   }

   >input{
      height: 5.6rem;
      width: 100%;

      padding: 1.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: transparent;
      border: 0;

      &::placeholder{
         color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
   }
`;