export default function Home() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center p-6">

      <div className="group relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl">

        <img
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Paisaje natural"
          className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 p-8 flex flex-col gap-4 text-white">

          <span className="text-sm uppercase tracking-widest text-indigo-500">
            Naturaleza
          </span>

          <h2 className="text-3xl font-bold leading-tight">
            Bosque & Montañas
          </h2>

          <p className="text-sm text-gray-200 max-w-sm">
            Un paisaje inspirador que combina tranquilidad y una vista panorámica impresionante.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm font-medium">

            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-600 transition"
            >
              Explorar →
            </a>

            <a
              href="#"
              className="text-white/80 hover:text-white transition"
            >
              Más información →
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}
