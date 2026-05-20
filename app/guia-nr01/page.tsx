import React from "react";

export const metadata = {
  title: "Guia NR-01 Completo",
  description: "Tudo sobre a NR-01: objetivos, estrutura, responsabilidades, GRO, PGR, saúde mental, riscos psicossociais, treinamentos, multas, prazos e mais.",
};

const menu = [
  "INTRODUÇÃO À NR-01",
  "OBJETIVOS DA NR-01",
  "ESTRUTURA DA NR-01",
  "RESPONSABILIDADES",
  "GRO e PGR",
  "SAÚDE MENTAL NA NR-01",
  "AVALIAÇÃO DE RISCOS PSICOSSOCIAIS",
  "TREINAMENTOS SEGUNDO A NR-01",
  "MULTAS E PENALIDADES",
  "PRAZO DE ADEQUAÇÃO",
  "INFORMAÇÕES DE PRODUTO"
];

export default function GuiaNR01Completo() {
  return (
    <div className="max-w-3xl mx-auto px-2 md:px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Guia Completo sobre NR-01</h1>
      <nav className="mb-8">
        <ul className="flex flex-wrap gap-2 justify-center">
          {menu.map((item) => (
            <li key={item}>
              <a href={`#${item.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")}`} className="text-primary hover:underline font-semibold text-base md:text-lg px-2 py-1">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section id="INTRODUÇÃO-À-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">INTRODUÇÃO À NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-0 text-lg leading-relaxed">A Norma Regulamentadora nº 01 (NR-01), base de todo o sistema de saúde e segurança do trabalho no Brasil, passou por atualização que incluiu a responsabilidade dos empregadores sobre riscos psicossociais. Apesar da obrigatoriedade, as empresas têm prazo para adequação até 2026. A NR-1 estabelece os princípios gerais e diretrizes que orientam a aplicação das demais normas regulamentadoras, definindo direitos, deveres e responsabilidades de empregadores e trabalhadores. Além de padronizar procedimentos, a norma busca promover uma cultura de prevenção, reduzindo riscos e fortalecendo a gestão integrada de segurança e saúde no ambiente laboral. Sua importância está em servir como ponto de partida para a conformidade legal e para a construção de ambientes de trabalho mais seguros, saudáveis e produtivos.</p>
        </div>
      </section>
      <section id="OBJETIVOS-DA-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">OBJETIVOS DA NR-01</h2>
        <p className="mb-6 text-lg leading-relaxed">A Norma Regulamentadora nº 01 (NR-01) tem como principal objetivo estabelecer as disposições gerais que orientam e fundamentam todas as demais Normas Regulamentadoras de Segurança e Saúde no Trabalho. Ela define os direitos e deveres de empregadores e trabalhadores, criando um alicerce legal e organizacional para a prevenção de acidentes e doenças ocupacionais.</p>

        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 mb-6 border border-cyan-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cyan-400 text-3xl">✔️</span>
            <span className="font-black text-xl md:text-2xl text-dark">Entre seus propósitos centrais estão:</span>
          </div>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2">
            <li>Garantir a proteção à saúde e segurança dos trabalhadores, por meio de diretrizes que assegurem condições dignas e seguras de trabalho;</li>
            <li>Estabelecer responsabilidades claras para empregadores e empregados, reforçando a importância do cumprimento das normas e da cooperação entre as partes;</li>
            <li>Uniformizar procedimentos e interpretações, de forma que todas as empresas sigam parâmetros consistentes e alinhados à legislação trabalhista;</li>
            <li>Promover uma cultura de prevenção, incentivando práticas que minimizem riscos e fortaleçam a gestão de saúde e segurança no ambiente de trabalho;</li>
            <li>Integrar a administração de riscos ocupacionais, servindo como base para o Programa de Gerenciamento de Riscos (PGR), que é exigência para a maioria das organizações.</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">Em síntese, o objetivo da NR-01 é fornecer um marco normativo inicial que norteia a aplicação de todas as demais normas regulamentadoras, garantindo segurança jurídica e fortalecendo a gestão preventiva nas relações de trabalho.</p>
      </section>
      <section id="ESTRUTURA-DA-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">ESTRUTURA DA NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed">A Norma Regulamentadora nº 01 (NR-01) possui uma estrutura que organiza as disposições gerais aplicáveis a todas as demais normas regulamentadoras. Sua composição foi desenvolvida para fornecer clareza, padronização e segurança jurídica no cumprimento das obrigações de saúde e segurança no trabalho.</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Disposições gerais – definem o campo de aplicação da norma, seu caráter obrigatório e a quem se destina;</li>
            <li>Direitos e deveres – estabelecem as responsabilidades tanto de empregadores quanto de trabalhadores no cumprimento das medidas de segurança e saúde;</li>
            <li>Capacitação e treinamento – tratam das diretrizes mínimas para qualificação, capacitação, treinamento inicial e periódico, visando à prevenção de riscos;</li>
            <li>Gerenciamento de riscos ocupacionais – integra a NR-01 ao Programa de Gerenciamento de Riscos (PGR), exigindo das empresas a identificação de perigos e a implementação de medidas preventivas;</li>
            <li>Documentos digitais – regulamentam a utilização do meio eletrônico para guarda e apresentação de documentos de segurança e saúde no trabalho, se alinhando à transformação digital;</li>
            <li>Disposições finais e transitórias – tratam de regras complementares e prazos de adaptação para as empresas.</li>
          </ul>
          <p className="text-lg leading-relaxed mb-0">Essa estrutura permite que a NR-01 funcione como uma norma de caráter introdutório e orientador, servindo de referência para a aplicação das demais NRs, sempre com foco na prevenção, organização e melhoria contínua das condições de trabalho.</p>
        </div>
      </section>
      <section id="RESPONSABILIDADES" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">RESPONSABILIDADES</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed font-semibold">Do Empregador</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Implementar e documentar o Programa de Gerenciamento de Riscos (PGR), garantindo que todos os riscos ocupacionais sejam identificados, avaliados e controlados;</li>
            <li>Identificar, avaliar e controlar riscos ocupacionais, aplicando medidas preventivas que reduzam a probabilidade de acidentes e doenças;</li>
            <li>Adotar medidas de prevenção técnicas, administrativas e organizacionais, promovendo mudanças nos processos e no ambiente que minimizem os riscos;</li>
            <li>Promover treinamentos regulares, incluindo capacitação sobre saúde mental e fatores psicossociais, assegurando que os trabalhadores estejam preparados para atuar com segurança;</li>
            <li>Garantir condições dignas de trabalho, respeitando limites legais de jornada, pausas, ergonomia e demais aspectos que impactem a saúde e o bem-estar dos colaboradores.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed font-semibold">Do Trabalhador</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Cumprir orientações de segurança, seguindo corretamente procedimentos e normas internas;</li>
            <li>Utilizar corretamente os equipamentos de proteção individual e coletiva, garantindo sua eficácia;</li>
            <li>Informar sobre riscos identificados, comunicando situações que possam comprometer a segurança própria ou de colegas;</li>
            <li>Participar de treinamentos, contribuindo para a criação de uma cultura de prevenção e aprendizado contínuo;</li>
            <li>Zelar por sua saúde física e mental, comunicando situações de estresse, assédio ou sobrecarga, e colaborando para a construção de um ambiente de trabalho saudável;</li>
          </ul>
          <p className="text-lg leading-relaxed mb-0">Essa divisão de responsabilidades demonstra que segurança e saúde no trabalho deve ser compartilhada, sendo imprescindível que empregadores e trabalhadores atuem de forma conjunta para prevenir riscos, promover bem-estar e garantir um ambiente laboral seguro e produtivo.</p>
        </div>
      </section>
      <section id="GRO-e-PGR" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">GRO e PGR</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed font-bold">Gerenciamento de Riscos Ocupacionais (GRO)</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Identificar perigos e riscos em todas as atividades laborais;</li>
            <li>Avaliar a gravidade e probabilidade dos riscos detectados, classificando-os por prioridade de ação;</li>
            <li>Definir medidas de controle e prevenção, sejam elas técnicas, administrativas ou organizacionais;</li>
            <li>Acompanhar continuamente os riscos, garantindo que as medidas adotadas permaneçam eficazes e atualizadas.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed">O GRO funciona como uma metodologia de análise e prevenção de riscos, que serve de base para a elaboração de programas de segurança mais amplos, como o PGR.</p>
          <p className="mb-4 text-lg leading-relaxed font-bold">Programa de Gerenciamento de Riscos (PGR)</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Identificação de todos os riscos ocupacionais presentes no ambiente de trabalho;</li>
            <li>Medidas de prevenção e controle para cada risco identificado, incluindo ações de monitoramento e melhoria contínua;</li>
            <li>Documentação e registros, garantindo rastreabilidade e conformidade legal;</li>
            <li>Treinamento e capacitação dos trabalhadores, promovendo conscientização e cultura de prevenção.</li>
          </ul>
          <p className="text-lg leading-relaxed mb-0">Enquanto o GRO é o processo de análise e controle de riscos, o PGR é a formalização e gestão desses processos, transformando as análises do GRO em ações concretas, documentadas e fiscalizáveis.</p>
        </div>
      </section>
      <section id="SAÚDE-MENTAL-NA-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">SAÚDE MENTAL NA NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed">A Portaria MTE nº 1.419 aprovou a nova redação do capítulo “1.5 – Gerenciamento de Riscos Ocupacionais” e promoveu alterações no Anexo I – Termos e Definições da NR-01. Entre as principais mudanças destacam-se:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Inclusão dos Riscos Psicossociais: a NR-01 passa a identificar e gerenciar explicitamente riscos psicossociais, reconhecendo fatores como estresse, assédio moral e sexual, violência no trabalho e sobrecarga mental.</li>
            <li>Revisão dos Termos e Definições: foram incluídos novos conceitos, como “Avaliação de Riscos”, “Identificação de Perigos” e “Emergências de Grande Magnitude”.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed font-semibold">Integração da NR-01 com a NR-17</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>A organização do trabalho e normas de produção;</li>
            <li>O modo de execução das tarefas, quando aplicável;</li>
            <li>A exigência de tempo para realização das atividades;</li>
            <li>O ritmo de trabalho;</li>
            <li>O conteúdo das tarefas, bem como os instrumentos e recursos disponíveis;</li>
            <li>Aspectos cognitivos e psicológicos que possam afetar a saúde e a segurança do trabalhador.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed">Com a integração das diretrizes da NR-01 e da NR-17, tornou-se obrigatório para as empresas adotar medidas que alinhem ergonomia e prevenção de riscos psicossociais, promovendo um ambiente de trabalho mais seguro, saudável e eficiente.</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Estresse ocupacional;</li>
            <li>Síndrome de Burnout;</li>
            <li>Ansiedade e depressão relacionadas ao trabalho;</li>
            <li>Assédio moral ou sexual;</li>
            <li>Excesso de jornada e pressão por metas;</li>
            <li>Isolamento social em regimes de teletrabalho/home office.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed font-semibold">Boas práticas recomendadas:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-0">
            <li>Inserir indicadores de saúde mental no PGR;</li>
            <li>Promover campanhas de conscientização e acolhimento psicológico;</li>
            <li>Implantar Canais de Escuta e Apoio (ex.: programas de assistência ao empregado);</li>
            <li>Capacitar líderes para identificar sinais de sofrimento mental;</li>
            <li>Garantir pausas adequadas e políticas de equilíbrio entre vida pessoal e profissional.</li>
          </ul>
        </div>
      </section>
      <section id="AVALIAÇÃO-DE-RISCOS-PSICOSSOCIAIS" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">AVALIAÇÃO DE RISCOS PSICOSSOCIAIS</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed">A partir de 2026, todas as empresas brasileiras deverão incluir a avaliação de riscos psicossociais no gerenciamento de Segurança e Saúde no Trabalho (SST). Essa exigência resulta da atualização da Norma Regulamentadora nº 01 (NR-01), realizada pelo Ministério do Trabalho e Emprego – MTE.</p>
          <p className="mb-2 text-lg leading-relaxed font-bold">Perfil das empresas brasileiras</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Serviços: 60.918 novos estabelecimentos (+3,43%);</li>
            <li>Comércio: 24.346 unidades (+1,51%);</li>
            <li>Construção: 10.795 novas empresas (+3,93%).</li>
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">O que são riscos psicossociais?</p>
          <p className="mb-2 text-lg leading-relaxed">Os riscos psicossociais estão ligados à organização do trabalho e às relações interpessoais dentro do ambiente laboral. Entre os principais fatores, destacam-se:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Estresse, ansiedade, depressão e outros problemas psicológicos.</li>
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">Mudanças trazidas pela atualização da NR-01</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Identificação e avaliação dos riscos psicossociais, independentemente do tamanho da empresa;</li>
            <li>Elaboração e implementação de planos de ação, com medidas preventivas e corretivas;</li>
            <li>Monitoramento contínuo das ações, garantindo sua eficácia e revisando sempre que necessário.</li>
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">Fiscalização</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Organização do trabalho;</li>
            <li>Registros de afastamentos por doenças mentais;</li>
            <li>Entrevistas com trabalhadores;</li>
            <li>Documentação relacionada à gestão de riscos psicossociais;</li>
            <li>Necessidade de profissionais especializados.</li>
          </ul>
          <p className="text-lg leading-relaxed mb-0">Importância da medida: reforça a necessidade de ambientes de trabalho saudáveis, promovendo a saúde mental e o bem-estar dos trabalhadores, contribuindo para reduzir afastamentos e aumentar a produtividade.</p>
        </div>
      </section>
      <section id="TREINAMENTOS-SEGUNDO-A-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">TREINAMENTOS SEGUNDO A NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="text-lg leading-relaxed mb-0">Conteúdo a ser adicionado conforme necessidade.</p>
        </div>
      </section>
      <section id="MULTAS-E-PENALIDADES" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">MULTAS E PENALIDADES</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-0">
            <li>Multas variam de acordo com o porte da empresa e a gravidade da infração.</li>
            <li>Possibilidade de interdição de atividades.</li>
            <li>Responsabilização civil e criminal em caso de acidente ou adoecimento ocupacional.</li>
          </ul>
        </div>
      </section>
      <section id="PRAZO-DE-ADEQUAÇÃO" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">PRAZO DE ADEQUAÇÃO</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed">A inclusão formal dos riscos psicossociais na Norma Regulamentadora nº 1 (NR-1) entra em vigor em 26 de maio de 2026, com o objetivo de exigir que as empresas avaliem e gerenciem fatores como carga de trabalho excessiva, assédio moral e ausência de suporte adequado por parte da liderança.</p>
          <p className="mb-4 text-lg leading-relaxed">Embora a data de obrigatoriedade para fins de autuação esteja fixada em 26 de maio de 2026, foi estabelecido um período prévio de caráter educativo, iniciado em 26 de maio de 2025, permitindo que as organizações se preparem para atender às novas exigências.</p>
          <p className="text-lg leading-relaxed mb-0">Nesse contexto, o Ministério do Trabalho e Emprego (MTE) disponibilizou um manual com o objetivo de orientar empresas e profissionais na gestão de riscos ocupacionais. A publicação apresenta diretrizes para a correta interpretação e aplicação do Capítulo 1.5 da Norma Regulamentadora nº 1, que trata do Gerenciamento de Riscos Ocupacionais (GRO), reforçando a importância da identificação, avaliação e controle dos riscos, inclusive os de natureza psicossocial.</p>
        </div>
      </section>
      <section id="INFORMAÇÕES-DE-PRODUTO" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">INFORMAÇÕES DE PRODUTO</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="text-lg leading-relaxed mb-0">Entre em contato para saber como a mysst pode ajudar sua empresa a se adequar à NR-01 e gerenciar riscos psicossociais de forma eficiente.</p>
        </div>
      </section>
    </div>
  );
}
