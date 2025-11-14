import bg from '../../assets/Menu.jpg';

export default function Home() {

    return (
        <div className="w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="text-6xl text-white font-bold mb-6">Turnos do Bem-Estar</h1>

            <div className="flex flex-col justify-center items-center text-center text-4xl text-white">
                <p className="mb-4">O futuro do trabalho começa com o cuidado no presente!</p>
                <p className="max-w-2xl text-lg">
                    A iniciativa Bem-Estar em Turnos trata-se de um grupo de pessoas que prioriza a saúde emocional da sua equipe durante seu dia-a-dia. Todos os dias, você terá a opção de responder cinco perguntas rápidas sobre como está se sentindo; E a partir dessas respostas, conta com o apoio combinado dos nossos funcionários e um assistente de IA, que juntos analisam o nível de estresse (baixo, médio ou alto) e sugerem pausas, exercícios de respiração, momentos de foco ou ajustes simples na rotina.
                </p>
            </div>

        </div>
    );
}