import { useState } from 'react';
import type { PecaModel } from '../models/PartModel';
import { TipoPeca, StatusPeca } from '../models/Enums';

export function usePartsViewModel() {
  const [parts] = useState<PecaModel[]>([
    { id: 1, nome: 'Motor Turbofan CFM56', tipo: TipoPeca.IMPORTADA, fornecedor: 'GE Aviation', status: StatusPeca.PRONTA, statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 2, nome: 'Trem de Pouso Dianteiro', tipo: TipoPeca.NACIONAL, fornecedor: 'Eleb', status: StatusPeca.PRONTA, statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 3, nome: 'Painel de Aviônicos', tipo: TipoPeca.IMPORTADA, fornecedor: 'Honeywell', status: StatusPeca.EM_TRANSPORTE, statusColor: 'bg-amber-100 text-amber-800 border-amber-200' },
  ]);

  return { parts };
}
