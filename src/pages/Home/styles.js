import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-columns: 25rem auto;
   grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
   grid-template-areas: "brand header"
                        "menu search"
                        "menu content"
                        "newnote content";

   background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
   grid-area: brand;
   display: flex;
   align-items: center;
   justify-content: center;

   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   >h1{
      font-size: 2.4rem;
      color:${({ theme }) => theme.COLORS.ORANGE}; ;
   }

`;

export const Menu = styled.ul`
   grid-area: menu;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   display: flex;
   flex-direction: column;

   padding-top: 6.4rem;
   text-align: center;
   
   >li{
      margin-bottom:2.4rem;
   }
`;

export const Search = styled.div`
   grid-area: search;
`;

export const Content = styled.div`
   grid-area: content;
`;

export const NewNote = styled.button`
   grid-area: newnote;
`;