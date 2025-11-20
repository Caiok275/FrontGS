export default function Sobre() {
    return (
        <div className="w-full min-h-screen bg-linear-to-b from-green-500 to-white flex flex-col justify-center items-center">
            <div className="max-w-3xl text-center">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
                    Sobre a iniciativa Bem-Estar - Um futuro saudável começa com o cuidado de hoje
                </h1>

                <p className="text-lg text-blue-800 mb-6">
                    A <strong>Iniciativa Bem-Estar</strong> nasceu com a missão de transformar o ambiente de trabalho em um lugar onde o bem-estar é prioridade. Sabemos que a real produtividade só é possível quando existe equilíbrio emocional, clareza mental e momentos de pausa ao longo da jornada de trabalho.
                </p>

                <p className="text-lg text-blue-800 mb-6">
                    Nosso projeto utiliza do apoio de um assistente inteligente capaz de avaliar diaramente como você está se sentido. Em poucos minutos, é possivel responder a um conjunto de perguntas simples e objetivas, que ajudam a compreender seu nível atual de estresse.
                </p>

                <p className="text-lg text-blue-800 mb-6">
                    Com base nessas respostas, nossa IA treinada identifica padrões e classifica seu estado emocional em três níveis - <strong>baixo, moderado ou alto</strong>. Com base no seu resultado, a IA recomenda pequenas ações que podem melhorar seu bem-estar ao longo do dia, como exercícios de respiração, pausas guiadas, reorganização de tarefas, momentos de profundo foco, entre outras dicas, ajudando a manter uma rotina mais leve, humorada e equilibrada mesmo nos dias mais intensos.
                </p>
            </div>
        </div>
    );
}
