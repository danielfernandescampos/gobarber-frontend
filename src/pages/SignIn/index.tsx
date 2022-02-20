import { useCallback, useRef, useContext } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo-4.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Yup from "yup";
import { AuthContext, useAuth } from "../../hooks/AuthContext";

import { Container, Content, Background } from "./styles";
import getValidationErrors from "../../utils/getValidationsErrors";

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();

  console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um email válido"),
          password: Yup.string().required("Digite a senha"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <strong>GoBarber</strong>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça login</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot-password">Esqueci minha senha</a>
        </Form>
        <a href="login">
          {" "}
          <FiLogIn /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
}
