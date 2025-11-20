import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface TemaContextType {
  tema: "claro" | "escuro";
  alterarTema: () => void;
}

const TemaContext = createContext<TemaContextType | undefined>(undefined);

export function ProviderTema({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<"claro" | "escuro">("claro");

  function alterarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }

  return (
    <TemaContext.Provider value={{ tema, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  const contexto = useContext(TemaContext);
  if (!contexto) {
    throw new Error("useTema deve ser usado dentro do ProviderTema");
  }
  return contexto;
}
