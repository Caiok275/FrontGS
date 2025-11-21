import { useState } from 'react';
import { useTema } from "../../context/TemaContext";

interface Contato {
  nome: string;
  email: string;
  mensagem: string;
}

interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

export default function Contato() {

  const { tema } = useTema();

  const [contato, setContato] = useState<Contato>({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: ChangeEvent) => {
    setContato({
      ...contato,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Enviado:', contato);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div
      className={
        tema === "claro"
          ? "w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center p-4"
          : "w-full min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center p-4"
      }
    >
      <div
        className={
          tema === "claro"
            ? "bg-white p-8 border-4 border-gray-500 rounded-lg w-full max-w-md"
            : "bg-gray-900 p-8 border-4 border-yellow-400 rounded-lg w-full max-w-md"
        }
      >
        <h1
          className={
            tema === "claro"
              ? "text-blue-900 text-4xl text-center font-bold mb-8"
              : "text-yellow-300 text-4xl text-center font-bold mb-8"
          }
        >
          Contate a equipe
        </h1>

        <form
          className={
            tema === "claro"
              ? "border-2 border-gray-400 rounded-md w-full px-4 py-4 flex flex-col gap-6"
              : "border-2 border-gray-600 rounded-md w-full px-4 py-4 flex flex-col gap-6"
          }
          onSubmit={handleSubmit}
        >

          <input
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-2 w-full mb-4 text-black"
                : "border-2 border-gray-600 rounded-md p-2 w-full mb-4 bg-gray-800 text-white"
            }
            type="text"
            name="nome"
            value={contato.nome}
            placeholder="Nome"
            onChange={handleChange}
          />

          <input
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-2 w-full mb-4 text-black"
                : "border-2 border-gray-600 rounded-md p-2 w-full mb-4 bg-gray-800 text-white"
            }
            type="email"
            name="email"
            value={contato.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <textarea
            className={
              tema === "claro"
                ? "border-2 border-gray-400 rounded-md p-2 w-full mb-4 text-black"
                : "border-2 border-gray-600 rounded-md p-2 w-full mb-4 bg-gray-800 text-white"
            }
            name="mensagem"
            value={contato.mensagem}
            placeholder="Mensagem"
            onChange={handleChange}
          />

          <div className="flex gap-3 justify-center mt-4">
            <button
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-10 rounded-md min-w-[50px] transition-colors duration-200"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
