import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import logoImg from "../../assets/logo-4.png"
import Button from "../../components/button";
import Input from "../../components/input";

import { Container, Content, Background } from "./styles"

export default function SignIn() {
    return (
        <Container>
            <Content>
                <strong>GoBarber</strong>
                <img src={logoImg} alt="GoBarber"/>
                <form>
                    <h1>Faça login</h1>
                    <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                    <Button type="submit">Entrar</Button>
                    <a href="forgot-password">Esqueci minha senha</a>
                </form>
                    <a href="login"> <FiLogIn /> Criar conta</a>
            </Content>
            <Background />
        </Container>
    )
}