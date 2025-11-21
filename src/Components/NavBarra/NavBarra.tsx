import { Link } from "react-router-dom";
import { useTema } from "../../context/TemaContext";
import BotaoTema from "../BotaoTema/BotaoTema";
import logo from "../../assets/logo-turnos-bem.png";

export default function NavBarra() {
  const { tema } = useTema();

  return (
    <header
      className={
        tema === "claro"
          ? "fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md z-50 text-black"
          : "fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gray-900 shadow-md z-50 text-white"
      }
    >
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo Turnos Bem" className="h-12" />
      </Link>

      <nav
        className={
          tema === "claro"
            ? "flex gap-10 text-lg font-semibold text-blue-900 items-center"
            : "flex gap-10 text-lg font-semibold text-white items-center"
        }
      >
        <Link to="/" className="hover:opacity-70 transition">Home</Link>
        <Link to="/sobre" className="hover:opacity-70 transition">Sobre</Link>
        <Link to="/integrantes" className="hover:opacity-70 transition">Integrantes</Link>
        <Link to="/faq" className="hover:opacity-70 transition">FAQ</Link>
        <Link to="/contato" className="hover:opacity-70 transition">Contato</Link>
      </nav>

      <div className="flex items-center gap-3">
        <BotaoTema />

        <Link
          to="/login"
          className="text-lg px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
        >
          Login
        </Link>

        <Link
          to="/registrar"
          className="text-lg px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
        >
          Registrar
        </Link>
      </div>
    </header>
  );
}
