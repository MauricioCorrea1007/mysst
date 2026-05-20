import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Guia completo sobre NR01",
  description: "Tudo sobre a NR01, incluindo riscos psicossociais, obrigações, exemplos e legislação atualizada.",
};

export default async function NR01Page() {
  // Redireciona para o conteúdo oficial externo
  if (typeof window !== "undefined") {
    window.location.href = "https://espacolegislacao.totvs.com/nr-1-inclusao-dos-riscos-psicossociais/";
    return null;
  }
  // SSR fallback
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
      <h1 className="text-3xl font-bold mb-4">Guia completo sobre NR01</h1>
      <p className="mb-6">Você está sendo redirecionado para o conteúdo completo da NR01.<br />
        Se não for redirecionado automaticamente, <Link href="https://espacolegislacao.totvs.com/nr-1-inclusao-dos-riscos-psicossociais/" className="text-primary underline">clique aqui</Link>.
      </p>
    </div>
  );
}
