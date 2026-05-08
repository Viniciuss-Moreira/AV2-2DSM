import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Circle, ArrowRight, Play, Check } from 'lucide-react';
import { useStagesViewModel } from '../../viewmodels/useStagesViewModel';
import { StatusEtapa } from '../../models/Enums';

export function ManageStages() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { stages, advanceStage } = useStagesViewModel();

  const allStagesCompleted = stages.every(s => s.status === StatusEtapa.CONCLUIDA);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-primary font-medium text-sm transition-colors">
          &larr; Voltar para Detalhes
        </button>
      </div>
      
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-8 items-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-60 pointer-events-none"></div>

        <div className="relative z-10 w-full">
          <h1 className="text-2xl font-extrabold text-primary mb-2">Etapas de Produção - Aeronave {id}</h1>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl mb-8">
            <p className="text-blue-800 text-sm font-bold">
              Regra de Negócio: 1 etapa só pode iniciar após a anterior terminar.
            </p>
          </div>

          <div className="space-y-6">
            {stages.map((stage, index) => {
              const isLocked = index > 0 && stages[index - 1].status !== StatusEtapa.CONCLUIDA;
              
              return (
                <div key={index} className={`flex items-center justify-between p-6 border rounded-2xl transition-all ${
                  stage.status === StatusEtapa.CONCLUIDA ? 'bg-emerald-50/50 border-emerald-100' :
                  stage.status === StatusEtapa.ANDAMENTO ? 'bg-blue-50/50 border-blue-200 shadow-md ring-1 ring-blue-100' :
                  'bg-white border-gray-200 opacity-60'
                }`}>
                  <div className="flex items-center gap-5">
                    {stage.status === StatusEtapa.CONCLUIDA ? (
                      <CheckCircle2 className="text-emerald-500" size={32} />
                    ) : stage.status === StatusEtapa.ANDAMENTO ? (
                      <div className="relative flex items-center justify-center w-8 h-8">
                        <div className="absolute w-full h-full rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
                      </div>
                    ) : (
                      <Circle className="text-gray-300" strokeWidth={3} size={32} />
                    )}
                    
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{stage.nome}</h3>
                      <p className="text-sm text-gray-500">Prazo: {stage.prazo}</p>
                    </div>
                  </div>

                  <div>
                    {stage.status === StatusEtapa.CONCLUIDA ? (
                      <span className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-lg text-sm border border-emerald-200">
                        Finalizada
                      </span>
                    ) : stage.status === StatusEtapa.ANDAMENTO ? (
                      <button
                        onClick={() => advanceStage(index)}
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg text-sm"
                      >
                        <Check size={18} />
                        Concluir Etapa
                      </button>
                    ) : (
                      <button
                        onClick={() => advanceStage(index)}
                        disabled={isLocked}
                        className={`flex items-center gap-2 px-6 py-2.5 font-bold rounded-xl transition-all text-sm shadow-sm ${
                          isLocked 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                            : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Play size={18} />
                        {isLocked ? 'Bloqueada' : 'Iniciar Etapa'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 w-full mt-4 relative z-10 flex justify-end">
          <button
            onClick={() => navigate(`/aeronaves/${id}/testes`)}
            disabled={!allStagesCompleted}
            className={`flex items-center gap-2 px-8 py-3 font-bold rounded-xl transition-all text-sm shadow-sm ${
              allStagesCompleted 
                ? 'bg-primary text-white hover:bg-blue-800' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
            }`}
          >
            IR PARA MÓDULO DE TESTES <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
