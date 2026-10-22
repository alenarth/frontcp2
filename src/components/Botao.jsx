function Botao({ texto, variante = 'primario', onClick }) {
  const estilos = {
    primario: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secundario: 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50',
  }

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${estilos[variante]}`}
    >
      {texto}
    </button>
  )
}

export default Botao
