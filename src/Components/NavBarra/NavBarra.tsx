import { Link } from 'react-router-dom';

export default function NavBarra() {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full flex justify-between items-center py-5 bg-transparent z-100">
                <Link to="/" className="text-5xl text-white">Logo</Link>

                <nav className="flex gap-8 text-2xl text-white">
                    <Link to="/" className="hover:underline hover:underline-offset-4">Home</Link>
                    <Link to="/integrantes" className="hover:underline hover:underline-offset-4">Integrantes</Link>
                    <Link to="/faq" className="hover:underline hover:underline-offset-4">FAQ</Link>
                    <Link to="/contato" className="hover:underline hover:underline-offset-4">Contato</Link>
                </nav>
                
                <button className="flex gap-4">
                    <Link to="/login" className="text-2xl px-4 py-3 text-white bg-red-600 rounded hover:bg-red-700">Login</Link>
                    <Link to="/registrar" className="text-2xl px-4 py-3 text-white bg-green-600 rounded hover:bg-green-700">Registrar</Link>
                </button>
            </header>
        </div>
    );
}
