import { Form } from "@unform/web";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import logoImg from "../../assets/logo-4.png";
import Button from "../../components/button";
import Input from "../../components/input";

import { Container, Content, Background } from "./styles";

export default function SignUp() {
  function handleSubmit(data: Object): void {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <strong>GoBarber</strong>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Usuário" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          {" "}
          <FiArrowLeft /> Voltar para Login
        </a>
      </Content>
      <Background />
    </Container>
  );
}
