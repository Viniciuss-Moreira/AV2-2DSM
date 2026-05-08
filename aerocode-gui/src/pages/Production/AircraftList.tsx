import { Link } from 'react-router-dom';
import { Plane, Plus, Search, Filter } from 'lucide-react';
import { useAircraftViewModel } from '../../viewmodels/useAircraftViewModel';

export function AircraftList() {
  const { aircrafts } = useAircraftViewModel();

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      
      {/* Search and Action Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar aeronave..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full md:w-80 shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <Filter size={16} />
            Filtros
          </button>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg font-semibold text-sm">
          <Plus size={18} />
          Nova Aeronave
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Código Único</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Modelo</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Status Atual</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {aircrafts.map((ac) => (
              <tr key={ac.codigo} className="hover:bg-blue-50/50 transition-colors group cursor-pointer">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                      <Plane size={20} />
                    </div>
                    <span className="font-bold text-gray-900">{ac.codigo}</span>
                  </div>
                </td>
                <td className="px-8 py-5 font-medium text-gray-700">{ac.modelo}</td>
                <td className="px-8 py-5 text-gray-600">{ac.tipo}</td>
                <td className="px-8 py-5">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                    ac.status === 'Testes' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 
                    ac.status === 'Finalizado' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                    'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {ac.status === 'Testes' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>}
                    {ac.status === 'Finalizado' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>}
                    {ac.status === 'Em Produção' && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>}
                    {ac.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <Link
                    to={`/aeronaves/${ac.codigo}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-all shadow-sm group-hover:border-primary"
                  >
                    Gerenciar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
