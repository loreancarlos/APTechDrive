import styled from "styled-components";
import bgSingIn from '../../assets/bgSingIn.png';

export const Container = styled.div`
   display: flex;
   align-items: stretch;

   height: 100vh;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;

   padding: 0 13.6rem;

   >h1{
      font-size: 4.8rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }

   >h2{
      font-size: 2.4rem;
      margin: 4.8rem 0;
   }

   >p{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

   >a{
      margin-top: 12.4rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
`;

export const Background = styled.div`
   flex: 1;
   background: url(${bgSingIn}) no-repeat center center;
   background-size:cover;
`;