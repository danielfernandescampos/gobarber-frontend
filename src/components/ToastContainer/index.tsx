import { ToastMessage } from "../../hooks/toast";
import { Container } from "./styles";
import Toast from "./Toast";
import { useTransition } from 'react-spring'
import { isTemplateTail } from "typescript";

interface ToastContainerProps {
  messages: ToastMessage[];
}

export default function ToastContainer({ messages }: ToastContainerProps) {

  const messagesWithTransitions = useTransition(
    messages, 
    {
      keys: message => message.id,
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  );

  return (
    <Container>
      {messagesWithTransitions(( props, item ) => (
        <Toast style={props} message={item}></Toast>
      ))}
    </Container>
  );
}
