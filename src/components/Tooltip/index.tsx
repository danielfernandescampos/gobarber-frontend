import { Container } from "./styles";

interface TooltipProps {
    title: string;
    children: any;
    className?: string
}

export default function Tooltip({ title, className, children }: TooltipProps) {
    return <Container className={className}>
        {children}
        <span>{title}</span>
    </Container>
}