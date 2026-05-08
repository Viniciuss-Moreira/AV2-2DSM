import { PlaneTakeoff, Lock, User } from 'lucide-react';
import { useAuthViewModel } from '../../viewmodels/useAuthViewModel';

export function Login() {
  const { username, setUsername, password, setPassword, login, error } = useAuthViewModel();

  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-primary to-gray-900"></div>
        <div className="z-10 text-white flex flex-col items-center">
          <PlaneTakeoff size={120} strokeWidth={1} className="mb-8 drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">AEROCODE</h1>
          <p className="mt-4 text-blue-200 text-lg font-medium tracking-wide">Gestão de Produção de Aeronaves</p>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo</h2>
            <p className="text-gray-500">Faça login para acessar o sistema</p>
          </div>
          
          <form onSubmit={login} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Usuário</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="eng_producao_01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm font-semibold text-center bg-red-50 py-2 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4 flex justify-center items-center gap-2"
            >
              Entrar no Sistema
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
