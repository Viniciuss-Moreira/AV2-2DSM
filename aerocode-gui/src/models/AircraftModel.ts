import { TipoAeronave } from './Enums';

export interface AeronaveModel {
  codigo: string;
  modelo: string;
  tipo: TipoAeronave;
  capacidade: number;
  alcance: number;
  status: string; // Keeps the UI status for now, or we can map it
}
