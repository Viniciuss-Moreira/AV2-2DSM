import { useLocation } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  let title = 'Dashboard';
  if (location.pathname.includes('/aeronaves') && !location.pathname.includes('/pecas') && !location.pathname.includes('/testes') && !location.pathname.includes('/etapas')) {
    title = location.pathname.split('/').length > 2 ? 'Detalhes da Aeronave' : 'Gestão de Aeronaves';
  } else if (location.pathname.includes('/pecas')) {
    title = 'Inventário de Peças';
  } else if (location.pathname.includes('/equipe')) {
    title = 'Gestão de Equipe';
  } else if (location.pathname.includes('/testes')) {
    title = 'Módulo de Qualidade e Testes';
  } else if (location.pathname.includes('/etapas')) {
    title = 'Etapas de Produção';
  }

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10 sticky top-0 z-10 shadow-sm">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
          />
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-gray-800">Eng. Produção</span>
            <span className="text-xs text-gray-500 font-medium">Administrador</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-400 text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-white">
            EP
          </div>
        </div>
      </div>
    </header>
  );
}
