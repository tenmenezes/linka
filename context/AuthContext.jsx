import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const user = {
        id: 1,
        nome: "João",
        tipo: "aluno",
    };

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}