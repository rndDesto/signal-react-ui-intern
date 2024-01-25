import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-screen bg-slate-200">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl">Signal React UI</h1>
          <div className="mt-2 text-slate-400">v.0.0.1.beta-1</div>
          <div className="mt-6 flex gap-2 bg-slate-50 border border-gray-300 p-2 rounded-md justify-center">
            <div>Contributors : </div>
            <div className="flex flex-col items-start">
              <Link className="text-blue-400" to="/nadhifa">Nadhifa</Link>
              <Link className="text-blue-400" to="/zikri">Zikri</Link>
              <Link className="text-blue-400" to="/agil">M Agil Faturrahman</Link>   
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home