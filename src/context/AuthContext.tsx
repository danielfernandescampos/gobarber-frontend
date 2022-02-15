import { createContext, useCallback } from "react";

interface AuthContextData {
    name: string;
    signIn(): void
}

interface Props {
    children: any
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
    const signIn = useCallback(() => {
        console.log('signIn')
    }, [])

    return (
        <AuthContext.Provider value={{ name: 'Daniel', signIn }}>
            {children}
        </ AuthContext.Provider>
    )
    
}
