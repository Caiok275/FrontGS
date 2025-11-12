import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type TypeContato = {
    nome:string;
    email:string;
    mensagem:string
}

export default function Contato(){
const navegacao = useNavigate();

const [Contato, setContato] = useState<TypeContato>({
    nome:"",
    email: "",
    mensagem: "",
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setContato({...Contato, [name]: value});
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navegacao("/")
}

return(
    <div className="px-10 padding min-h-screen max-w 2xl m-auto my-7">
        <h1 className="text-blue-900 text-4xl text-center font-bold mb-8"> Contate a equipe</h1>

    <form className="border-2 border-gray-400 p-4 rounded-md" onSubmit={handleSubmit}>
        <input className="border-2 border-gray-400 rounded-md p-2 w-full mb-2" type="text" name="nome" value={Contato.nome} placeholder="Nome" onChange={handleChange}></input>
        <input className="border-2 border-gray-400 rounded-md p-2 w-full mb-2" type="text" name="email" value={Contato.email} placeholder="Email" onChange={handleChange}></input>
        <input className="border-2 border-gray-400 rounded-md p-2 w-full mb-2" type="text" name="mensagem" value={Contato.mensagem} placeholder="Mensagem" onChange={handleChange}></input>
        <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-md mr-3" type="submit">Enviar</button>
        <Link className="bg-red-700 text-white font-bold py-2 px-4 rounded-md" to={"/"}>Cancelar</Link>
    </form>
    </div>

)
}