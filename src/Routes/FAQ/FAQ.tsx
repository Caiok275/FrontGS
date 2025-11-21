import { useTema } from "../../context/TemaContext";

type PerguntaProps = {
  pergunta: string;
  resposta: string;
};

function Pergunta({ pergunta, resposta }: PerguntaProps) {
  const { tema } = useTema();

  return (
    <div
      className={
        tema === "claro"
          ? "border-4 border-blue-800 rounded-md p-6 bg-white text-gray-800"
          : "border-4 border-yellow-400 rounded-md p-6 bg-gray-800 text-white"
      }
    >
      <h1 className="text-center text-xl font-bold mb-2">{pergunta}</h1>
      <p className="text-center opacity-80">{resposta}</p>
    </div>
  );
}

export default function FAQ() {
  const { tema } = useTema();

  return (
    <div
      className={
        tema === "claro"
          ? "w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center px-4 py-8"
          : "w-full min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 py-8"
      }
    >
      <h2
        className={
          tema === "claro"
            ? "text-3xl font-bold text-center mb-8 text-blue-900"
            : "text-3xl font-bold text-center mb-8 text-yellow-300"
        }
      >
        Perguntas Frequentes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        <Pergunta
          pergunta="O que é o Turnos do Bem-Estar e como ele funciona na prática?"
          resposta="O Turnos do Bem-Estar é uma plataforma que ajuda a monitorar e reduzir o nível de estresse no trabalho e no dia a dia. O usuário responde 5 perguntas rápidas sobre como está se sentindo, a IA analisa as respostas junto com nossa equipe humana e gera recomendações simples, como pausas, exercícios de respiração ou ajustes de rotina."
        />
        <Pergunta
          pergunta="O Turnos do Bem-Estar substitui o trabalho do RH ou psicólogos?"
          resposta="Não. A plataforma é um apoio, não um substituto. Ela ajuda a identificar sinais de estresse e sobrecarga mais cedo, fornecendo informações e recomendações que podem orientar ações do RH, gestores, família e quando necessário, encaminhamento para suporte especializado."
        />
        <Pergunta
          pergunta="Com que frequência eu preciso responder às perguntas?"
          resposta="A recomendação é que o check-in seja feito uma vez por dia, levando menos de 2 minutos. Isso garante um acompanhamento contínuo e precisão nos relatórios mensais."
        />
        <Pergunta
          pergunta="Quais são os horários de atendimento?"
          resposta="O hospital funciona de segunda a sexta, das 7h às 19h, e aos sábados das 8h às 12h."
        />
        <Pergunta
          pergunta="Minha empresa pode aderir o sistema?"
          resposta="Sim, oferecemos parcerias para empresas e lideranças acompanharem o estado físico e emocional de seus funcionários."
        />
        <Pergunta
          pergunta="Como posso entrar em contato para mais informações?"
          resposta="Você pode nos contatar através da página de Contato, onde encontrará um formulário para enviar suas dúvidas ou solicitar mais informações."
        />
      </div>
    </div>
  );
}
