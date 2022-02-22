import { useCallback, useRef, useContext } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo-4.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";

import { Container, Content, Background, AnimationContainer } from "./styles";
import getValidationErrors from "../../utils/getValidationsErrors";
import { useToast } from "../../hooks/toast";
import { Link } from "react-router-dom";

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();
  const { addToast } = useToast();

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
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login",
        });
      }
    },
    [signIn, addToast]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <strong>GoBarber</strong>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça login</h1>
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <a href="forgot-password">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            {" "}
            <FiLogIn /> Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
