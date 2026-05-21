import React from "react";

export const metadata = {
  title: "Guia NR-01 Completo",
  description: "Tudo sobre a NR-01: objetivos, estrutura, responsabilidades, GRO, PGR, saúde mental, riscos psicossociais, treinamentos, multas, prazos e mais.",
};

const menu = [
  "O QUE É A NR-01",
  "PROPÓSITOS DA NR-01",
  "ORGANIZAÇÃO DA NR-01",
  "RESPONSABILIDADES",
  "GRO e PGR",
  "SAÚDE MENTAL NA NR-01",
  "AVALIAÇÃO DE RISCOS PSICOSSOCIAIS",
  "MULTAS E PENALIDADES RELACIONADAS A NR-01",
  "PRAZO DE ADEQUAÇÃO"

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
      <section id="O-QUE-É-A-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">O QUE É A NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-0 text-lg leading-relaxed">A NR-01 é a espinha dorsal do sistema de segurança e saúde no trabalho no Brasil. Com sua atualização mais recente, ela passou a exigir que os empregadores também respondam pelos riscos psicossociais — um avanço significativo na proteção dos trabalhadores.As empresas têm até 2026 para se adequar à nova exigência. A norma define os princípios gerais, direitos, deveres e responsabilidades tanto de empregadores quanto de colaboradores, servindo como referência para todas as demais normas regulamentadoras.Mais do que organizar procedimentos, a NR-01 busca criar uma cultura de prevenção — reduzindo riscos, fortalecendo a gestão integrada de segurança e tornando o ambiente de trabalho mais seguro, saudável e produtivo.</p>
        </div>
      </section>
      <section id="PROPÓSITOS-DA-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">PROPÓSITOS DA NR-01</h2>
        <p className="mb-6 text-lg leading-relaxed">A NR-01 é a norma que estabelece as bases de todo o sistema de Segurança e Saúde no Trabalho no Brasil. Ela define os direitos e deveres de empregadores e trabalhadores, criando o alicerce legal e organizacional para prevenir acidentes e doenças ocupacionais.</p>

        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 mb-6 border border-cyan-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cyan-400 text-3xl">✔️</span>
            <span className="font-black text-xl md:text-2xl text-dark">Seus propósitos centrais são:</span>
          </div>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2">
            <li>🔒 Proteger a saúde e segurança dos trabalhadores — com diretrizes que garantam condições dignas e seguras no ambiente de trabalho;</li>
            <li>📋 Definir responsabilidades claras — para empregadores e empregados, reforçando a cooperação e o cumprimento das normas;</li>
            <li>📐 Uniformizar procedimentos — para que todas as empresas sigam parâmetros consistentes e alinhados à legislação trabalhista;</li>
            <li>🛡️ Promover uma cultura de prevenção — incentivando práticas que reduzam riscos e fortaleçam a gestão de SST;</li>
            <li>⚙️ Integrar o gerenciamento de riscos ocupacionais — servindo de base para o PGR, exigência para a maioria das organizações.</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">Em síntese, a NR-01 é o marco normativo que orienta todas as demais normas regulamentadoras, garantindo segurança jurídica e fortalecendo a gestão preventiva nas relações de trabalho.</p>
      </section>
      <section id="ORGANIZACAO-DA-NR-01" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">ORGANIZAÇÃO DA NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed">A NR-01 é organizada em uma estrutura que reúne as disposições gerais aplicáveis a todas as demais normas regulamentadoras. Cada seção foi pensada para trazer clareza, padronização e segurança jurídica no cumprimento das obrigações de SST.</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>📋 Disposições gerais — definem o campo de aplicação da norma, seu caráter obrigatório e a quem se destina</li>
            <li>⚖️ Direitos e deveres — estabelecem as responsabilidades de empregadores e trabalhadores na adoção das medidas de segurança e saúde</li>
            <li>🎓 Capacitação e treinamento — tratam das diretrizes mínimas para qualificação, capacitação, treinamento inicial e periódico, visando à prevenção de riscos;</li>
            <li>🛠️ Gerenciamento de riscos ocupacionais — integra a NR-01 ao Programa de Gerenciamento de Riscos (PGR), exigindo das empresas a identificação de perigos e a implementação de medidas preventivas;</li>
            <li>📁 Documentos digitais — regulamentam a utilização do meio eletrônico para guarda e apresentação de documentos de segurança e saúde no trabalho, se alinhando à transformação digital;</li>
            <li>📜 Disposições finais e transitórias — tratam de regras complementares e prazos de adaptação para as empresas.</li>
          </ul>
          <p className="text-lg leading-relaxed mb-0">Essa estrutura faz da NR-01 uma norma de caráter introdutório e orientador, servindo de referência para todas as demais NRs — sempre com foco na prevenção, organização e melhoria contínua das condições de trabalho.</p>
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
          <p className="mb-4 text-lg leading-relaxed">A avaliação de riscos psicossociais deve seguir a mesma lógica dos demais riscos ocupacionais:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Identificar fatores como estresse crônico, sobrecarga, assédio moral, baixa autonomia, jornadas excessivas, conflitos interpessoais.</li>
            <li>Avaliar o nível de exposição e a gravidade de cada fator.</li>
            <li>Registrar no inventário de riscos do PGR.</li>
            <li>Monitorar continuamente com planos de ação e evidências.</li>
        
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">O cenário de (des)preparação das empresas</p>
          <p className="mb-2 text-lg leading-relaxed">Os números recentes são preocupantes:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Empresas preparadas para a NR-01: apenas 5% - Fonte: Exame (set/2025) </li>
            <li>Empresas que não sabem o que muda: quase 70% - Fonte: Instagram/LinkedIn (abr/2026)</li>
            <li>Empresas que não sabem como cumprir: 68% - Fonte: Ius Natura (abr/2026)</li>
            <li>Empresas que ainda não se adequaram: quase 50% - Fonte: Fellipelli Consultoria (fev/2026)</li>
            
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">Na prática: de cada 20 empresas, apenas 1 está pronta. As outras 19 estão expostas a riscos de multa, embargo e responsabilização.</p>
          <p>O que cai na fiscalização:</p>
          <p>O Manual de Interpretação e Aplicação lançado pelo MTE em março de 2026 deixou claro que a fiscalização vai cobrar:</p>
          <p>📋 Documentação obrigatória:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>inventário de riscos com psicossociais incluídos</li>
            <li>plano de ação com medidas preventivas e corretivas</li>
            <li>registros de consulta aos trabalhadores (pesquisas de percepção, entrevistas)</li>
            <li>evidências de monitoramento contínuo</li>    
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">🔍 Métodos aceitos:</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>questionários validados (como COPSOQ)</li>
            <li>entrevistas e grupos focais</li>
            <li>análise de indicadores (absenteísmo, rotatividade, afastamentos)</li>
            <li>inspeções no ambiente de trabalho</li>
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">O risco financeiro</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>Segundo pesquisa da Fellipelli Consultoria, as multas podem chegar a R$ 900 mil para empresas que não se adequarem — considerando múltiplos autos de infração por itens diferentes da NR-28, agravados pelo porte da empresa e reincidência.</li>
          </ul>
          <p className="mb-2 text-lg leading-relaxed font-bold">O gargalo principal</p>
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
            <li>68% das empresas não sabem como cumprir porque a avaliação de riscos psicossociais exige metodologia, ferramentas digitais e profissionais qualificados — algo que a maioria das pequenas e médias empresas simplesmente não tem internamente. É aí que plataformas como a mysst fazem a diferença: estruturam o diagnóstico, aplicam as pesquisas, consolidam os resultados e geram os documentos prontos para auditoria.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-0">Importância da medida: reforça a necessidade de ambientes de trabalho saudáveis, promovendo a saúde mental e o bem-estar dos trabalhadores, contribuindo para reduzir afastamentos e aumentar a produtividade.</p>
        </div>
      </section>
      
      <section id="MULTAS-E-PENALIDADES" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">MULTAS E PENALIDADES EM DESCUMPRIMENTO A NR-01</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-0">
            <li>A NR-01 não é uma recomendação — é obrigação legal. E o descumprimento gera consequências que vão muito além de uma notificação.</li>
            <p>Como as multas são calculadas: </p>
            <li>As penalidades seguem a NR-28 (Fiscalização e Penalidades), atualizada pela Portaria MTE nº 1.131/2025. O valor final da multa depende de três fatores: </li>
            <li>Gravidade da infração — classificação em escala de I1 a I4:
                <ul className="list-disc ml-8 text-lg leading-relaxed space-y-2 mb-4">
                    <li>I1 - Leve: Falhas documentais menores</li>
                    <li>I2 - Grave: Ausência parcial de registros</li>
                    <li>I3 - Gravíssima: Falta de PGR ou inventário de riscos</li>
                    <li>I4 - Gravíssima com agravantes: Reincidência ou exposição comprovada a risco grave</li>
                </ul>
            </li>
            <li>Número de funcionários — a multa é proporcional ao porte da empresa. Quanto maior, maior o valor.</li>
            <li>Reincidência — infrações repetidas podem elevar o valor em dobro ou mais.</li>
            <p>Valores práticos (2026)</p>
            <li>Para infrações relacionadas ao Gerenciamento de Riscos Ocupacionais (GRO) e PGR, os valores por autuação podem variar de R$ 700 a mais de R$ 8.000 por item — e uma única fiscalização pode lavrar múltiplos autos de infração sobre itens diferentes da NR-01.</li>
            <li>Considerando que a NR-01 possui mais de 30 itens passíveis de autuação (conforme Anexo II da NR-28), uma empresa completamente desalinhada pode acumular dezenas de multas em uma única fiscalização.</li>
            <p>Além das multas — penalidades mais graves:</p>
            <li>⚠️ Embargo e interdição — a fiscalização pode embargar obras ou interditar máquinas, setores ou até a empresa inteira até que as irregularidades sejam sanadas. Isso significa paralisação total ou parcial das operações.</li>
            <li>⚠️ Dano moral coletivo — o Ministério Público do Trabalho (MPT) pode ingressar com Ação Civil Pública exigindo indenizações por danos morais coletivos, com valores que frequentemente ultrapassam R$ 500 mil.</li>
            <li>⚠️ Passivo trabalhista — em ações individuais, trabalhadores podem pleitear indenizações por danos morais e materiais decorrentes de doenças ocupacionais ou acidentes que a NR-01 tinha a obrigação de prevenir.</li>
            <li>⚠️ Responsabilização criminal — em casos de acidente com morte, os gestores podem responder criminalmente por homicídio culposo.</li>
          </ul>
        </div>
      </section>
      <section id="PRAZO-DE-ADEQUAÇÃO" className="mb-12">
        <h2 className="text-3xl font-extrabold mb-4 border-b-4 border-cyan-400 pb-2 w-fit">PRAZO DE ADEQUAÇÃO</h2>
        <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 border border-cyan-200 shadow-sm">
          <p className="mb-4 text-lg leading-relaxed">Com a atualização da NR-01 promovida pela Portaria MTE nº 1.419/2024, as empresas ganharam um período de transição para se estruturar. As obrigações gerais — como PGR, inventário de riscos e treinamentos — já são exigíveis desde a publicação da norma. Já a inclusão dos riscos psicossociais no Gerenciamento de Riscos Ocupacionais (GRO) teve como marco de exigibilidade plena maio de 2026. Isso significa que, a partir de agora, a fiscalização do Ministério do Trabalho pode cobrar a gestão completa — incluindo mapeamento, avaliação e monitoramento dos fatores psicossociais — e aplicar as penalidades previstas na NR-28 para empresas que não comprovarem a conformidade. O prazo de adequação já está vigente, e quem não se estruturou está exposto a multas, embargos e outras sanções.</p>
        </div>
      </section>
      
    </div>
  );
}
