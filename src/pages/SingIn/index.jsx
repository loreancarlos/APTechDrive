import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input';
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SingIn() {
   return (
      <Container>
         <Form>
            <h1>APTech Drive</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
            <h2>Faça seu login</h2>
            <Input placeholder="Email" type="text" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
            <Button title="Entrar" />
            <Link to="/register">Criar conta</Link>
         </Form>
         <Background />
      </Container>
   );
} 