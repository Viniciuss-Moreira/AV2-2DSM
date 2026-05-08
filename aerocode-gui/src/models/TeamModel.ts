import { NivelPermissao } from './Enums';

export interface FuncionarioModel {
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
  usuario: string;
  senha?: string;
  nivelPermissao: NivelPermissao;
  
  // UI helpers mapping to 'func', 'initials', 'color' used in view
  func?: string;
  initials?: string;
  color?: string;
}
