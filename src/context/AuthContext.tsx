import { createContext, useContext, useState, } from "react";
import type { ReactNode } from "react";

interface Usuario {
  email: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  login: (user: Usuario) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(
    () => JSON.parse(localStorage.getItem("usuario") || "null")
  );

  function login(user: Usuario) {
    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
