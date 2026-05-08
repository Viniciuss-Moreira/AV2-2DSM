import { useState } from 'react';
import type { AeronaveModel } from '../models/AircraftModel';
import { TipoAeronave } from '../models/Enums';

export function useAircraftViewModel() {
  const [aircrafts] = useState<AeronaveModel[]>([
    { codigo: 'AC-737-001', modelo: 'Boeing 737', tipo: TipoAeronave.COMERCIAL, capacidade: 215, alcance: 6500, status: 'Em Produção' },
    { codigo: 'AC-F39-002', modelo: 'F-39 Gripen', tipo: TipoAeronave.MILITAR, capacidade: 2, alcance: 3200, status: 'Testes' },
    { codigo: 'AC-E195-003', modelo: 'Embraer E195', tipo: TipoAeronave.COMERCIAL, capacidade: 146, alcance: 4260, status: 'Finalizado' },
  ]);

  return {
    aircrafts,
  };
}
