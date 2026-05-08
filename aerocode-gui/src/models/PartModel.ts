import { TipoPeca, StatusPeca } from './Enums';

export interface PecaModel {
  id?: number;
  nome: string;
  tipo: TipoPeca;
  fornecedor: string;
  status: StatusPeca;
  statusColor?: string; // Optional UI helper
}
