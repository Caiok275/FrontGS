export default function NavBarra() {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full flex justify-between items-center py-5 bg-transparent z-50">
                <a href="/" className="text-5xl text-white">Logo</a>

                <nav className="flex gap-8 text-2xl text-white">
                    <a href="/" className="hover:underline hover:underline-offset-4">Home</a>
                    <a href="/" className="hover:underline hover:underline-offset-4">Integrantes</a>
                    <a href="/" className="hover:underline hover:underline-offset-4">Sobre</a>
                    <a href="/" className="hover:underline hover:underline-offset-4">Contato</a>
                </nav>
                
                <button className="flex gap-4">
                    <a href="/" className="text-2xl px-4 py-3 text-white bg-red-600 rounded hover:bg-red-700">Login</a>
                    <a href="/" className="text-2xl px-4 py-3 text-white bg-green-600 rounded hover:bg-green-700">Registrar</a>
                </button>
            </header>
        </div>
    );
}

