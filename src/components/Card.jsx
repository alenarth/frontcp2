function Card({ titulo, descricao, imagem, children }) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-slate-800">{titulo}</h2>
        <p className="text-slate-600 text-sm">{descricao}</p>
        {children}
      </div>
    </div>
  )
}

export default Card
