import Link from "next/link";

export default function GuiaNR01Button() {
  return (
    <div className="flex justify-center mb-8">
      <Link href="/guia-nr01" passHref>
        <button className="bg-primary text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg border-2 border-cyan-400 hover:brightness-110 transition-all" style={{boxShadow: '0 4px 16px 0 #00cfff22'}}>
          Guia completo sobre NR01
        </button>
      </Link>
    </div>
  );
}
