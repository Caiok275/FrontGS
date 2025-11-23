import { useState } from "react";
import { useTema } from "../../context/TemaContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { tema } = useTema();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.email || !form.senha) {
      alert("Preencha todos os campos!");
      return;
    }

    const usuarioSalvo = localStorage.getItem("usuarioRegistrado");

    if (!usuarioSalvo) {
      alert("Nenhum usuário registrado encontrado!");
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (form.email !== usuario.email || form.senha !== usuario.senha) {
      alert("Email ou senha incorretos!");
      return;
    }

    login({ email: form.email });

    alert("Login realizado com sucesso!");

    navigate("/formulario");
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
              ? "text-blue-900 text-3xl font-bold text-center mb-6"
              : "text-yellow-300 text-3xl font-bold text-center mb-6"
          }
        >
          Login
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
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
            value={form.senha}
            onChange={handleChange}
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-3 text-lg bg-white text-black"
                : "border-2 border-yellow-400 rounded-md p-3 text-lg bg-gray-800 text-white"
            }
          />

          <button
            type="submit"
            className="bg-blue-700 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
