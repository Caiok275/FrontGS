import { useTema } from "../../context/TemaContext";

export default function Sobre() {

    const { tema } = useTema();

    return (
        <div
            className={
                tema === "claro"
                    ? "w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center"
                    : "w-full min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center"
            }
        >
            <div
                className={
                    tema === "claro"
                        ? "max-w-3xl bg-white shadow-lg border-4 border-blue-800 rounded-xl p-10 text-center"
                        : "max-w-3xl bg-gray-900 shadow-lg border-4 border-yellow-400 rounded-xl p-10 text-center text-white"
                }
            >

                <h1
                    className={
                        tema === "claro"
                            ? "text-3xl font-bold mb-6 text-blue-900"
                            : "text-3xl font-bold mb-6 text-yellow-300"
                    }
                >
                    Sobre a iniciativa Bem-Estar - Um futuro saudável começa com o cuidado de hoje
                </h1>

                <p className="text-lg mb-6">
                    A <strong>Iniciativa Bem-Estar</strong> nasceu com a missão de transformar o
                    ambiente de trabalho em um lugar onde o bem-estar é prioridade. Sabemos que a
                    real produtividade só é possível quando existe equilíbrio emocional, clareza
                    mental e momentos de pausa ao longo da jornada de trabalho.
                </p>

                <p className="text-lg mb-6">
                    Nosso projeto utiliza do apoio de um assistente inteligente capaz de avaliar
                    diaramente como você está se sentido. Em poucos minutos, é possivel responder
                    a um conjunto de perguntas simples e objetivas, que ajudam a compreender seu
                    nível atual de estresse.
                </p>

                <p className="text-lg mb-6">
                    Com base nessas respostas, nossa IA treinada identifica padrões e classifica
                    seu estado emocional em três níveis — <strong>baixo, moderado ou alto</strong>.
                    A partir do resultado, recomenda pequenas ações para melhorar seu bem-estar ao
                    longo do dia, como exercícios de respiração, pausas guiadas, reorganização de
                    tarefas e momentos de foco profundo.
                </p>

            </div>
        </div>
    );
}
