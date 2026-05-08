import { NavLink, useNavigate } from 'react-router-dom';
import { Plane, Wrench, Users, LogOut } from 'lucide-react';

export function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <aside className="w-72 bg-primary text-white flex flex-col h-screen fixed left-0 top-0 shadow-2xl z-20">
      <div className="h-20 flex items-center justify-center border-b border-blue-800 bg-blue-950/30">
        <div className="flex items-center gap-3">
          <Plane className="h-8 w-8 text-blue-300" />
          <span className="font-extrabold text-2xl tracking-widest uppercase text-white drop-shadow-md">Aerocode</span>
        </div>
      </div>
      
      <nav className="flex-1 p-5 space-y-3 overflow-y-auto mt-4">
        <NavLink
          to="/aeronaves"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive ? 'bg-blue-600/50 text-white shadow-inner border border-blue-500/30' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white'
            }`
          }
        >
          <Plane className="h-5 w-5" />
          Aeronaves
        </NavLink>
        <NavLink
          to="/aeronaves/AC-737-001/pecas"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive ? 'bg-blue-600/50 text-white shadow-inner border border-blue-500/30' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white'
            }`
          }
        >
          <Wrench className="h-5 w-5" />
          Inventário de Peças
        </NavLink>
        <NavLink
          to="/equipe"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive ? 'bg-blue-600/50 text-white shadow-inner border border-blue-500/30' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white'
            }`
          }
        >
          <Users className="h-5 w-5" />
          Gestão de Equipe
        </NavLink>
      </nav>

      <div className="p-5 border-t border-blue-800 bg-blue-950/20">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/10 text-white font-bold text-sm hover:bg-white/20 rounded-xl border border-white/10 transition-all duration-200 shadow-sm backdrop-blur-sm"
        >
          <LogOut className="h-4 w-4" />
          Sair do Sistema
        </button>
      </div>
    </aside>
  );
}
