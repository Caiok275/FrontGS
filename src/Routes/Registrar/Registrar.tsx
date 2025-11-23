import { useState } from "react";
import { useTema } from "../../context/TemaContext";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const { tema } = useTema();
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      dados.nome === "" ||
      dados.email === "" ||
      dados.senha === "" ||
      dados.confirmarSenha === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    if (dados.senha !== dados.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    localStorage.setItem(
      "usuarioRegistrado",
      JSON.stringify({
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
      })
    );

    alert("Cadastro realizado com sucesso!");

    navigate("/login");
  }

  return (
    <div
      className={
        tema === "claro"
          ? "w-full min-h-screen bg-gray-200 flex justify-center items-center p-6"
          : "w-full min-h-screen bg-gray-900 text-white flex justify-center items-center p-6"
      }
    >
      <div
        className={
          tema === "claro"
            ? "bg-white p-10 border-4 border-blue-800 rounded-xl w-full max-w-lg shadow-xl"
            : "bg-gray-800 p-10 border-4 border-yellow-400 rounded-xl w-full max-w-lg shadow-xl"
        }
      >
        <h1
          className={
            tema === "claro"
              ? "text-blue-900 text-3xl text-center font-bold mb-8"
              : "text-yellow-300 text-3xl text-center font-bold mb-8"
          }
        >
          Criar Conta
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="nome"
            className="border-2 border-gray-400 rounded-md p-3"
            placeholder="Nome completo"
            value={dados.nome}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="border-2 border-gray-400 rounded-md p-3"
            placeholder="Email"
            value={dados.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="senha"
            className="border-2 border-gray-400 rounded-md p-3"
            placeholder="Senha"
            value={dados.senha}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmarSenha"
            className="border-2 border-gray-400 rounded-md p-3"
            placeholder="Confirmar senha"
            value={dados.confirmarSenha}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-md"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
