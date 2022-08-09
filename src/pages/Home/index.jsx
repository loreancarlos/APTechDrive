import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
   return (
      <Container>
         <Brand>
            <h1>APTech Drive</h1>
         </Brand>
         <Header />

         <Menu>
            <li><ButtonText title="Todos" isActive /></li>
            <li><ButtonText title="Windows Server" /></li>
            <li> <ButtonText title="Windows 10" /></li>
         </Menu>

         <Search />
         <Content>

         </Content>
         <NewNote>

         </NewNote>
      </Container>
   );
}