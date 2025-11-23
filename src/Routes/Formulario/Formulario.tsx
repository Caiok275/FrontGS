import { useState } from "react";
import { useTema } from "../../context/TemaContext";

export default function FormularioBemEstar() {
  const { tema } = useTema();

  const [form, setForm] = useState({
    sono: "",
    humor: "",
    estresse: "",
    tensao: "",
    motivacao: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Respostas enviadas:", form);
    alert("Formulário enviado com sucesso!");
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
            ? "bg-white p-8 border-4 border-blue-800 rounded-xl w-full max-w-lg shadow-lg"
            : "bg-gray-800 p-8 border-4 border-yellow-400 rounded-xl w-full max-w-lg shadow-lg"
        }
      >
        <h1
          className={
            tema === "claro"
              ? "text-2xl font-bold text-blue-900 text-center mb-1"
              : "text-2xl font-bold text-yellow-300 text-center mb-1"
          }
        >
          Autoavaliação de Bem-Estar
        </h1>

        <p
          className={
            tema === "claro"
              ? "text-sm text-blue-900 text-center mb-6 opacity-80"
              : "text-sm text-yellow-200 text-center mb-6 opacity-80"
          }
        >
          (1 = pior estado, 5 = melhor estado)
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div className="text-center">
            <p className="font-semibold mb-2">Como está sua qualidade de sono hoje?</p>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <span className="mb-1">{num}</span>
                  <input type="radio" name="sono" value={num} onChange={handleChange} />
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2">Como você avaliaria seu humor hoje?</p>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <span className="mb-1">{num}</span>
                  <input type="radio" name="humor" value={num} onChange={handleChange} />
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2">Como está seu nível de estresse hoje?</p>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <span className="mb-1">{num}</span>
                  <input type="radio" name="estresse" value={num} onChange={handleChange} />
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2">Quão tenso você está hoje?</p>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <span className="mb-1">{num}</span>
                  <input type="radio" name="tensao" value={num} onChange={handleChange} />
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-2">Quão motivado você se sente hoje?</p>
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <span className="mb-1">{num}</span>
                  <input type="radio" name="motivacao" value={num} onChange={handleChange} />
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className={
              tema === "claro"
                ? "bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-md mt-4"
                : "bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md mt-4"
            }
          >
            Enviar Respostas
          </button>
        </form>
      </div>
    </div>
  );
}
