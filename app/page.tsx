export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen flex items-center justify-center p-6">

      <div className="group relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">

        <img
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Paisaje natural"
          className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 p-8 flex flex-col gap-4 text-white">

          <span className="text-sm uppercase tracking-widest text-indigo-400">
            Naturaleza
          </span>

          <h2 className="text-3xl font-bold leading-tight">
            Bosque & Montañas
          </h2>

          <p className="text-sm text-gray-300 max-w-sm">
            Un paisaje inspirador que combina tranquilidad y una vista panorámica impresionante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm font-medium transition duration-300">
              Explorar
            </button>

            <button className="px-6 py-2 border border-white/40 hover:bg-white hover:text-black rounded-full text-sm font-medium transition duration-300">
              Más Info
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}
