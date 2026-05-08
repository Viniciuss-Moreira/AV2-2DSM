import { useState } from 'react';
import type { EtapaModel } from '../models/ProductionModels';
import { StatusEtapa } from '../models/Enums';

export function useStagesViewModel() {
  // Mock stages logic specifically for this aircraft
  const [stages, setStages] = useState<EtapaModel[]>([
    { nome: 'Montagem Estrutural', prazo: '10/05/2026', status: StatusEtapa.CONCLUIDA },
    { nome: 'Instalação de Sistemas', prazo: '15/05/2026', status: StatusEtapa.ANDAMENTO },
    { nome: 'Módulo de Testes', prazo: '20/05/2026', status: StatusEtapa.PENDENTE },
  ]);

  const advanceStage = (index: number) => {
    setStages(prev => {
      const newStages = [...prev];
      if (newStages[index].status === StatusEtapa.PENDENTE) {
        // Can only start if previous is completed (or if it's the first stage)
        if (index === 0 || newStages[index - 1].status === StatusEtapa.CONCLUIDA) {
          newStages[index].status = StatusEtapa.ANDAMENTO;
        } else {
          alert('Erro: A etapa anterior deve ser concluída antes de iniciar esta.');
        }
      } else if (newStages[index].status === StatusEtapa.ANDAMENTO) {
        newStages[index].status = StatusEtapa.CONCLUIDA;
      }
      return newStages;
    });
  };

  return {
    stages,
    advanceStage
  };
}
