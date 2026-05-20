
"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function OrcamentoForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    atividade: "",
    colaboradores: ""
  });


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Aqui você pode adicionar lógica de envio
    alert("Solicitação enviada! Em breve entraremos em contato.");
  }

  return (
    <div className="flex justify-center" id="orcamento">
      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-2xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">Solicite seu Orçamento Personalizado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome do Contato" className="rounded-lg border border-blue-200 px-4 py-3 text-lg w-full" required />
          <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da Empresa" className="rounded-lg border border-blue-200 px-4 py-3 text-lg w-full" required />
          <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="rounded-lg border border-blue-200 px-4 py-3 text-lg w-full" required />
          <input name="atividade" value={form.atividade} onChange={handleChange} placeholder="Atividade da Empresa" className="rounded-lg border border-blue-200 px-4 py-3 text-lg w-full" required />
          <input name="colaboradores" value={form.colaboradores} onChange={handleChange} placeholder="Quantidade de Colaborador" className="rounded-lg border border-blue-200 px-4 py-3 text-lg w-full md:col-span-2" required />
        </div>
        <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-xl py-4 px-8 rounded-lg flex items-center justify-center w-full transition-all">
          Solicite Orçamento Personalizado
          <span className="ml-2">✈️</span>
        </button>
      </form>
    </div>
  );
}
