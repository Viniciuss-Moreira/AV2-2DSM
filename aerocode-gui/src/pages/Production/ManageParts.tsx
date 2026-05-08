import { Wrench, Plus, PackageOpen, Filter, Search } from 'lucide-react';
import { usePartsViewModel } from '../../viewmodels/usePartsViewModel';

export function ManageParts() {
  const { parts } = usePartsViewModel();

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      
      {/* Add New Part Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-60 pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
            <Plus size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Registrar Nova Peça</h2>
            <p className="text-sm text-gray-500 font-medium">Adicione componentes ao inventário global ou vincule a uma aeronave.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Nome / Código da Peça</label>
            <input type="text" placeholder="Ex: Motor Turbofan CFM56" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 hover:bg-white transition-all shadow-inner" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Origem do Componente</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 hover:bg-white transition-all shadow-inner appearance-none">
              <option>Selecione...</option>
              <option>Nacional</option>
              <option>Importada</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Aeronave Vinculada</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 hover:bg-white transition-all shadow-inner appearance-none">
              <option>Estoque Global (Sem vínculo)</option>
              <option>AC-737-001</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg text-sm flex items-center gap-2">
            Salvar Registro
          </button>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center">
              <PackageOpen size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Lista de Peças e Status</h2>
              <p className="text-sm text-gray-500 font-medium">Acompanhe a disponibilidade e entrega dos materiais.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar peça..." 
                className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
              />
            </div>
            <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-3">
            {parts.map((part) => (
              <div key={part.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Wrench size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{part.nome}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded border border-gray-200">
                        {part.tipo}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border ${part.statusColor}`}>
                    {part.status === 'PRONTA' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div>}
                    {part.status === 'EM_TRANSPORTE' && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>}
                    {part.status === 'EM_PRODUCAO' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>}
                    {part.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
