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
          ? "w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center"
          : "w-full min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CAIO */}
        <div
          className={
            tema === "claro"
              ? "border-4 border-blue-800 rounded-md p-4 flex flex-col items-center bg-white"
              : "border-4 border-yellow-400 rounded-md p-4 flex flex-col items-center bg-gray-900"
          }
        >
          <img
            src={imgCaio}
            alt="foto caio"
            className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3
            className={
              tema === "claro"
                ? "text-lg font-bold text-black"
                : "text-lg font-bold text-white"
            }
          >
            Caio Kenzo Tayra
          </h3>
          <p className="text-sm text-gray-400">RM: 562979</p>
          <p className="text-sm text-gray-400">Turma: 1TDSPI</p>
        </div>

        {/* ENZO */}
        <div
          className={
            tema === "claro"
              ? "border-4 border-blue-800 rounded-md p-4 flex flex-col items-center bg-white"
              : "border-4 border-yellow-400 rounded-md p-4 flex flex-col items-center bg-gray-900"
          }
        >
          <img
            src={imgEnzo}
            alt="foto enzo"
            className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3
            className={
              tema === "claro"
                ? "text-lg font-bold text-black"
                : "text-lg font-bold text-white"
            }
          >
            Enzo Vieira Bernardini
          </h3>
          <p className="text-sm text-gray-400">RM: 563000</p>
          <p className="text-sm text-gray-400">Turma: 1TDSPI</p>
        </div>

        {/* NICOLAS */}
        <div
          className={
            tema === "claro"
              ? "border-4 border-blue-800 rounded-md p-4 flex flex-col items-center bg-white"
              : "border-4 border-yellow-400 rounded-md p-4 flex flex-col items-center bg-gray-900"
          }
        >
          <img
            src={imgNico}
            alt="foto nicolas"
            className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3
            className={
              tema === "claro"
                ? "text-lg font-bold text-black"
                : "text-lg font-bold text-white"
            }
          >
            Nicolas Mota Cândido
          </h3>
          <p className="text-sm text-gray-400">RM: 561857</p>
          <p className="text-sm text-gray-400">Turma: 1TDSPI</p>
        </div>

      </div>
    </div>
  );
}
