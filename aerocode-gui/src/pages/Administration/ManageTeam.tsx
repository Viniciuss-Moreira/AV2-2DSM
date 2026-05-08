import { Users, UserPlus, Shield, Activity } from 'lucide-react';
import { useTeamViewModel } from '../../viewmodels/useTeamViewModel';

export function ManageTeam() {
  const { team } = useTeamViewModel();

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-5 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
              <UserPlus size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Atribuir Funcionário</h2>
              <p className="text-sm text-gray-500 font-medium">Cadastre novos membros à equipe.</p>
            </div>
          </div>

          <div className="space-y-6 mb-8 relative z-10">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Nome Completo</label>
              <input type="text" placeholder="Ex: Carlos Alberto" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 hover:bg-white transition-all shadow-inner" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Nível de Permissão</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 hover:bg-white transition-all shadow-inner appearance-none">
                  <option>Selecione o nível...</option>
                  <option>Administrador</option>
                  <option>Engenheiro Aeronáutico</option>
                  <option>Engenheiro de Produção</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Responsabilidade / Etapa</label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Ex: Testes Elétricos" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50 hover:bg-white transition-all shadow-inner" />
              </div>
            </div>
          </div>
          
          <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2">
            Salvar Atribuição
          </button>
        </div>

        {/* List Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-full">
          <div className="p-8 border-b border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Equipe Cadastrada</h2>
              <p className="text-sm text-gray-500 font-medium">Visualize os responsáveis e seus acessos.</p>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              {team.map((member) => (
                <div key={member.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-inner ${member.color?.includes('bg-primary') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{member.nome}</h3>
                      <p className="text-sm text-gray-500 font-medium mt-0.5">{member.func}</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest border ${member.color}`}>
                      {member.nivelPermissao}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
