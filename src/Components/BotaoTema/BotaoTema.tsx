import { useTema } from "../../context/TemaContext";

export default function BotaoTema() {
  const { tema, alterarTema } = useTema();

  return (
    <button
      onClick={alterarTema}
      className="px-4 py-2 rounded-md bg-blue-600 text-white"
    >
      {tema === "claro" ? "Tema Escuro" : "Tema Claro"}
    </button>
  );
}
