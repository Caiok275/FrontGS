import { useState } from "react";
import { useTema } from "../../context/TemaContext";

export default function Registrar() {
  const { tema } = useTema();

  interface Usuario {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
  }

  const [dados, setDados] = useState<Usuario>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (dados.senha !== dados.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div
      className={
        tema === "claro"
          ? "w-full min-h-screen bg-gray-200 flex justify-center items-center p-4"
          : "w-full min-h-screen bg-gray-800 text-white flex justify-center items-center p-4"
      }
    >
      <div
        className={
          tema === "claro"
            ? "bg-white border-4 border-blue-800 rounded-xl p-10 w-[90%] max-w-lg shadow-lg"
            : "bg-gray-900 border-4 border-yellow-400 rounded-xl p-10 w-[90%] max-w-lg shadow-lg"
        }
      >
        <h1
          className={
            tema === "claro"
              ? "text-blue-900 text-3xl font-bold text-center mb-8"
              : "text-yellow-300 text-3xl font-bold text-center mb-8"
          }
        >
          Criar Conta
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={dados.nome}
            onChange={handleChange}
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-3 text-lg bg-white text-black"
                : "border-2 border-yellow-400 rounded-md p-3 text-lg bg-gray-800 text-white"
            }
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={dados.email}
            onChange={handleChange}
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-3 text-lg bg-white text-black"
                : "border-2 border-yellow-400 rounded-md p-3 text-lg bg-gray-800 text-white"
            }
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={dados.senha}
            onChange={handleChange}
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-3 text-lg bg-white text-black"
                : "border-2 border-yellow-400 rounded-md p-3 text-lg bg-gray-800 text-white"
            }
          />

          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            value={dados.confirmarSenha}
            onChange={handleChange}
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-3 text-lg bg-white text-black"
                : "border-2 border-yellow-400 rounded-md p-3 text-lg bg-gray-800 text-white"
            }
          />

          <button
            type="submit"
            className="bg-blue-700 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition mt-4"
          >
            Registrar
          </button>

        </form>
      </div>
    </div>
  );
}
