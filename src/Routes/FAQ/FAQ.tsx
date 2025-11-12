
type PerguntaProps = {
  pergunta: string;
  resposta: string;
};

function Pergunta({ pergunta, resposta }: PerguntaProps) {
  return (
    <div className="border-4 border-blue-800 rounded-md p-6 bg-white">
      <h1 className="text-center text-xl font-bold text-gray-800 mb-2">{pergunta}</h1>
      <p className="text-center text-gray-600">{resposta}</p>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
        Perguntas Frequentes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Pergunta
          pergunta="Quem somos?"
          resposta="Somos um hospital referência no atendimento público e privado, dedicado a oferecer cuidado de qualidade, segurança e atenção humanizada a todos os pacientes"
        />
        <Pergunta
          pergunta="O hospital atende convênios?"
          resposta="Sim, o Hospital das Clínicas atende diversos convênios e oferece suporte para agendamento de consultas e procedimentos."
        />
        <Pergunta
          pergunta="Onde fica localizado?"
          resposta="O hospital está localizado na Av. Dr. Enéas de Carvalho Aguiar 255, Cerqueira César, São Paulo."
        />
        <Pergunta
          pergunta="Quais são os horários de atendimento?"
          resposta="O hospital funciona de segunda a sexta, das 7h às 19h, e aos sábados das 8h às 12h."
        />
        <Pergunta
          pergunta="É possível agendar consultas de forma remota?"
          resposta="Sim, oferecemos teleconsultas para algumas especialidades, permitindo atendimento remoto de forma segura e prática para os pacientes."
        />
        <Pergunta
          pergunta="Como entrar em contato com o hospital?"
          resposta="Você pode entrar em contato pelo telefone (11) 2661-0000 ou pelo e-mail contato@hospital.com.br."
        />
      </div>
    </div>
  );
}