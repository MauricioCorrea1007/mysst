


"use client";
import dynamic from "next/dynamic";
import { ShieldCheck, ArrowRight } from "lucide-react";

const NR1Form = dynamic(() => import("./NR1Form"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-2 to-primary-dark py-12 md:py-20">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Texto à esquerda */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full text-xs font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              Plataforma digital de SST
            </div>
            <h1 className="text-4xl sm:text-2xl lg:text-5xl font-bold text-white leading-tight mb-6">
              A <span className="text-blue-400">NR-01</span> exige que os riscos psicossociais sejam mapeados, avaliados e monitorados continuamente
              <br />
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Sua empresa precisa comprovar que gerencia esses riscos com dados concretos, ações estruturadas e evidências documentadas. A Mysst transforma essa exigência em prática: do diagnóstico inteligente ao plano de ação monitorado, tudo alinhado com as normas vigentes.
            </p>

            <ul className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed list-disc list-inside">
              <li>🔍 Mapeamento completo dos riscos psicossociais </li>
              <li>📊 Relatórios por setor</li>
              <li>🎯 Plano de ação integrado ao PGR</li>
              <li>👥 Capacitação de equipes e gestores</li>
              <li>📋 Evidências prontas para auditoria </li>
            
            </ul>
          </div>
          {/* Formulário à direita */}
          <div className="flex-1 min-w-[320px] max-w-md mx-auto md:mx-0">
            <NR1Form />
          </div>
        </div>
      </div>
    </section>
  );
}