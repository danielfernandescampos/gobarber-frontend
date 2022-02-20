import { ToastMessage } from "../../hooks/toast";
import { Container } from "./styles";
import Toast from "./Toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

export default function ToastContainer({ messages }: ToastContainerProps) {

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message}></Toast>
      ))}
    </Container>
  );
}
