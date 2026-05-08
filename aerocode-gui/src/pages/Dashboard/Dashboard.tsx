import { Link } from 'react-router-dom';
import { Plane, Wrench, Users, ArrowRight } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <Link to="/aeronaves" className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1">
          <div className="h-2 bg-primary w-full"></div>
          <div className="p-8">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Plane size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Listagem de Aeronaves</h2>
            <p className="text-gray-500 leading-relaxed">Gerencie a produção, acompanhe os detalhes e controle o fluxo de montagem de cada aeronave.</p>
            <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
              Acessar Módulo <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>
        
        <div className="block bg-gray-50 rounded-2xl shadow-sm border border-gray-200 overflow-hidden opacity-75 cursor-not-allowed">
          <div className="h-2 bg-gray-400 w-full"></div>
          <div className="p-8">
            <div className="w-14 h-14 bg-gray-200 text-gray-500 rounded-2xl flex items-center justify-center mb-6">
              <Wrench size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Inventário Global</h2>
            <p className="text-gray-500 leading-relaxed">Controle centralizado de todos os componentes nacionais e importados do estoque.</p>
            <div className="mt-6 flex items-center text-gray-400 font-semibold text-sm">
              Módulo Bloqueado
            </div>
          </div>
        </div>

        <Link to="/equipe" className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1">
          <div className="h-2 bg-primary w-full"></div>
          <div className="p-8">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Gestão de Funcionários</h2>
            <p className="text-gray-500 leading-relaxed">Atribua equipes, restrinja acessos do sistema e defina níveis de permissão.</p>
            <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
              Acessar Módulo <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
