import { useState } from 'react';

export default function Contato() {
  const [Contato, setContato] = useState<Contato>({
    nome: '',
    email: '',
    mensagem: ''
  });

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

const handleChange = (e: ChangeEvent) => {
    setContato({
        ...Contato,
        [e.target.name]: e.target.value
    });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Enviado:', Contato);
    alert('Mensagem enviada com sucesso!');
  };

  return (

    <div className="w-full min-h-screen bg-gradient-to-b from-green-500 to-white flex flex-col justify-center items-center p-4 "> 
      <div className="bg-white p-8 border-4 border-gray-500 rounded-lg w-full max-w-md">
        <h1 className="text-green-700 text-4xl text-center font-bold mb-8">
          Contate a equipe
        </h1>

        <form className="border-2 border-gray-400 rounded-md w-full px-4 py-4 flex flex-col gap-6" onSubmit={handleSubmit}>
          <input className="border-2 border-gray-400 rounded-md p-2 w-full mb-4" type="text" name="nome" value={Contato.nome} placeholder="Nome"
            onChange={handleChange}/>

          <input className="border-2 border-gray-400 rounded-md p-2 w-full mb-4" type="email" name="email" value={Contato.email} placeholder="Email"
            onChange={handleChange} />

          <textarea
            className="border-2 border-gray-400 rounded-md p-2 w-full mb-4" name="mensagem" value={Contato.mensagem}
            placeholder="Mensagem"
            onChange={handleChange}/>
          
          <div className="flex gap-3 justify-center mt-4">
            <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-10 rounded-md min-w-[50px] transition-colors duration-200" type="submit">Enviar
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}