
import { ShieldCheck, Brain, BarChart2, User, CheckCircle, FileText } from "lucide-react";

const modules = [
  {
    icon: ShieldCheck,
    title: "GRO Sem Burocracia",
    desc: "Automatize todo o ciclo da NR01. Documentação sempre atualizada e em conformidade com o MTE."
  },
  {
    icon: Brain,
    title: "MRP com IA e COPSOQ II",
    desc: "Quantifique riscos psicossociais com algoritmos e análise estruturada. Métricas exatas e relatórios rápidos."
  },
  {
    icon: BarChart2,
    title: "Inteligência Visual",
    desc: "Heatmaps, radar, matrizes e gráficos para decisões rápidas e visibilidade total dos riscos."
  },
  {
    icon: User,
    title: "Coleta 100% Digital e Anônima",
    desc: "Interface segura para colaboradores, garantindo dados honestos e diagnósticos reais."
  },
  {
    icon: CheckCircle,
    title: "Plano de Ação Sob Medida",
    desc: "Ações personalizadas, acompanhamento de evolução e integração nativa ao PGR."
  },
  {
    icon: FileText,
    title: "Evidências Prontas para Auditoria",
    desc: "Relatórios técnicos padronizados, segurança de dados e conformidade ética."
  }
];

export default function ModulesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Módulos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            O que a mysst entrega
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-3">
                <mod.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark mb-1">{mod.title}</h3>
              <p className="text-gray-600 text-sm">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}