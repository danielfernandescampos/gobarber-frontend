import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Container, Toast } from "./styles";

export default function ToastContainer() {
    return (
        <Container>
            <Toast hasDescription type="success">
                <FiAlertCircle />
                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Não foi possivel fazer o login na aplicação</p>
                </div>
                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>    
            <Toast hasDescription type="error">
                <FiAlertCircle />
                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Não foi possivel fazer o login na aplicação</p>
                </div>
                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>    
            <Toast hasDescription={false}>
                <FiAlertCircle />
                <div>
                    <strong>Aconteceu um erro</strong>
                </div>
                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>    
        </ Container>
    )
}