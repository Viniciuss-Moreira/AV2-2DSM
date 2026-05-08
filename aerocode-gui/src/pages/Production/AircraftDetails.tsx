import { useParams, useNavigate } from 'react-router-dom';
import { Plane, CheckCircle2, Circle, Wrench } from 'lucide-react';

export function AircraftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const aircraftCode = id || 'AC-737-001';

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Info Card */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-extrabold text-white bg-gray-400 uppercase tracking-widest mb-6 inline-block px-4 py-2 rounded-lg">INFORMAÇÕES DA AERONAVE</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <Plane size={24} />
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500 mb-1"><strong className="text-gray-900 inline-block w-20">Código:</strong> {aircraftCode}</p>
                    <p className="text-gray-500 mb-1"><strong className="text-gray-900 inline-block w-20">Modelo:</strong> Boeing 737</p>
                    <p className="text-gray-500 mb-1"><strong className="text-gray-900 inline-block w-20">Tipo:</strong> Comercial</p>
                    <p className="text-gray-500"><strong className="text-gray-900 inline-block w-20">Status:</strong> <span className="text-blue-600 font-bold">Em Produção</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate(`/aeronaves/${aircraftCode}/pecas`)}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all text-sm shadow-sm"
              >
                <Wrench size={18} />
                GERENCIAR PEÇAS
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Workflow */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-extrabold text-white bg-gray-400 uppercase tracking-widest mb-8 inline-block px-4 py-2 rounded-lg">ETAPAS DE PRODUÇÃO / TESTES</h2>
              
              <div className="space-y-6 pl-2">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-gray-900" size={28} />
                  <h3 className="font-bold text-gray-900 text-base">Etapa 1: Montagem Estrutural (Concluída)</h3>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-gray-900" size={28} />
                  <h3 className="font-bold text-gray-900 text-base">Etapa 2: Instalação de Sistemas (Concluída)</h3>
                </div>

                <div className="flex items-center gap-4">
                  <Circle className="text-gray-300" strokeWidth={3} size={28} />
                  <h3 className="font-bold text-gray-500 text-base">Etapa 3: Módulo de Testes Pendente</h3>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => navigate(`/aeronaves/${aircraftCode}/etapas`)}
                className="px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all text-sm shadow-sm"
              >
                GERENCIAR ETAPAS
              </button>
              <button
                onClick={() => navigate(`/aeronaves/${aircraftCode}/testes`)}
                className="px-6 py-3 bg-gray-200 border-2 border-transparent text-gray-900 font-bold rounded-xl hover:bg-gray-300 transition-all text-sm shadow-sm"
              >
                EXECUTAR TESTES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-400 px-6 py-4 border-b border-gray-200 text-center">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest">
            HISTÓRICO DE LOGS / RELATÓRIOS
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-8 py-5 text-sm">
            <strong className="text-gray-900">01/05/2026:</strong> <span className="text-gray-600">Montagem Estrutural finalizada por Pedro Alves.</span>
          </div>
          <div className="px-8 py-5 text-sm">
            <strong className="text-gray-900">03/05/2026:</strong> <span className="text-gray-600">Instalação de Sistemas aprovada.</span>
          </div>
          <div className="px-8 py-5 text-sm italic text-gray-500 bg-gray-50">
            Aguardando execução dos testes elétricos e hidráulicos para liberação do PDF.
          </div>
        </div>
      </div>
    </div>
  );
}
