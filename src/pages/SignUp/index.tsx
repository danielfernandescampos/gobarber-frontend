import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import logoImg from "../../assets/logo-4.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getValidationsErrors";
import { Background, Container, Content, AnimationContainer } from "./styles";

export default function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err: any) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <strong>GoBarber</strong>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input
              name="name"
              icon={FiUser}
              type="text"
              placeholder="Usuário"
            />
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
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            {" "}
            <FiArrowLeft /> Voltar para Login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
