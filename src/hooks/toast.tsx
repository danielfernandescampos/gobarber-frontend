import { createContext, useCallback, useContext, useState } from "react";
import uuidv4 from "uuidv4";
import ToastContainer from "../components/ToastContainer";

interface Props {
    children: any
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

export interface ToastMessage {
    type?: 'success' | 'error' | 'info';
    title: string;
    id: string;
    description: string;
}

export const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export function ToastProvider({ children }: Props) {

    const [messages, setMessages] = useState<ToastMessage[]>([])
    const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>) => {
        const id = uuidv4();
        const toast = {
            id,
            type,
            title,
            description
        }

        setMessages([...messages, toast])
    }, [])
    const removeToast = useCallback((id: string) => {
        setMessages(state => state.filter(message => message.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            { children }
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    )
}

export function useToast(): ToastContextData {
    const context = useContext(ToastContext)

    if(!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }

    return context;
}