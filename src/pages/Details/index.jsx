import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ullam natus doloremque repellendus accusamus, nobis aut distinctio magni ea omnis laboriosam fugiat labore pariatur minima, facere asperiores adipisci quia dignissimos?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="http://rocketseat.com.br" target="_blank">Link 1</a></li>
              <li><a href="http://rocketseat.com.br" target="_blank">Link 2</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Windows Server" />
            <Tag title="Windows 10" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}; 