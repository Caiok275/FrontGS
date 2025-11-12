import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-blue-900">ERROR!</h1>
      <p className="text-xl p-4 md-6">Página não encontrada.</p>
      <Link to="/"className="mt-6 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-300">
        Voltar para Home
      </Link>
    </div>
  )
}