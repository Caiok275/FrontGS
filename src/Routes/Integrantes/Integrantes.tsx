import { useTema } from "../../context/TemaContext";
import imgCaio from "../../assets/fotocaio.jpeg";
import imgEnzo from "../../assets/fotoenzo.jpg";
import imgNico from "../../assets/fotonico.jpg";

export default function Integrantes() {
  const { tema } = useTema();

  return (
    <div
      className={
        tema === "claro"
          ? "w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center p-6"
          : "w-full min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6"
      }
    >
      <h2
        className={
          tema === "claro"
            ? "text-3xl font-bold text-center mb-8 text-blue-900"
            : "text-3xl font-bold text-center mb-8 text-yellow-300"
        }
      >
        Conheça os Integrantes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div
          className={
            tema === "claro"
              ? "border-4 border-blue-800 rounded-xl p-6 flex flex-col items-center bg-white shadow-lg w-72"
              : "border-4 border-yellow-400 rounded-xl p-6 flex flex-col items-center bg-gray-800 shadow-lg w-72"
          }
        >
          <img
            src={imgCaio}
            alt="foto caio"
            className="w-36 h-36 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3 className="text-lg font-bold">Caio Kenzo Tayra</h3>
          <p className="text-sm opacity-80">RM: 562979</p>
          <p className="text-sm opacity-80">Turma: 1TDSPI</p>

          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/Caiok275"
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/caio-kenzo-tayra-015a1a367/"
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className={
            tema === "claro"
              ? "border-4 border-blue-800 rounded-xl p-6 flex flex-col items-center bg-white shadow-lg w-72"
              : "border-4 border-yellow-400 rounded-xl p-6 flex flex-col items-center bg-gray-800 shadow-lg w-72"
          }
        >
          <img
            src={imgEnzo}
            alt="foto enzo"
            className="w-36 h-36 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3 className="text-lg font-bold">Enzo Vieira Bernardini</h3>
          <p className="text-sm opacity-80">RM: 563000</p>
          <p className="text-sm opacity-80">Turma: 1TDSPI</p>

          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/enzovbernard"
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/enzo-vieira-bernardini-8814b6365/"
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className={
            tema === "claro"
              ? "border-4 border-blue-800 rounded-xl p-6 flex flex-col items-center bg-white shadow-lg w-72"
              : "border-4 border-yellow-400 rounded-xl p-6 flex flex-col items-center bg-gray-800 shadow-lg w-72"
          }
        >
          <img
            src={imgNico}
            alt="foto nicolas"
            className="w-36 h-36 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3 className="text-lg font-bold">Nicolas Mota Cândido</h3>
          <p className="text-sm opacity-80">RM: 561857</p>
          <p className="text-sm opacity-80">Turma: 1TDSPI</p>

          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/Nicomotac"
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nicolas-mota-b339261b4/"
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

