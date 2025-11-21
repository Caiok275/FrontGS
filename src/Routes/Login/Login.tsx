import { useState } from "react";
import { useTema } from "../../context/TemaContext";

export default function Login() {
  const { tema } = useTema();

  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Login realizado (simulação)");
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
            ? "bg-white p-8 border-4 border-blue-800 rounded-lg w-full max-w-md"
            : "bg-gray-900 p-8 border-4 border-yellow-400 rounded-lg w-full max-w-md"
        }
      >
        <h1
          className={
            tema === "claro"
              ? "text-blue-900 text-3xl text-center font-bold mb-8"
              : "text-yellow-300 text-3xl text-center font-bold mb-8"
          }
        >
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={dados.email}
            onChange={handleChange}
            className={
              tema === "claro"
                ? "border-2 border-gray-400 p-2 rounded-md text-black"
                : "border-2 border-gray-600 p-2 rounded-md bg-gray-800 text-white"
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
                ? "border-2 border-gray-400 p-2 rounded-md text-black"
                : "border-2 border-gray-600 p-2 rounded-md bg-gray-800 text-white"
            }
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
