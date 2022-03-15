import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import logoImg from "../../assets/logo-4.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import getValidationErrors from "../../utils/getValidationsErrors";
import { Background, Container, Content, AnimationContainer } from "./styles";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate()
  const { addToast } = useToast();
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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

      await api.post('/users', data);

      navigate('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode realizar o seu login'
      })

    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: "error",
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao fazer cadastro, tente novamente",
      });
    }
  }, [addToast, navigate]);

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
