import { useState } from 'react';
import type { FuncionarioModel } from '../models/TeamModel';
import { NivelPermissao } from '../models/Enums';

export function useTeamViewModel() {
  const [team] = useState<FuncionarioModel[]>([
    { id: 1, nome: 'Maria Silva', telefone: '11999999999', endereco: 'Rua A, 123', usuario: 'msilva', nivelPermissao: NivelPermissao.ADMINISTRADOR, func: 'Visão Macro e Relatórios', initials: 'MS', color: 'bg-primary text-white border-primary' },
    { id: 2, nome: 'João Souza', telefone: '11888888888', endereco: 'Rua B, 456', usuario: 'jsouza', nivelPermissao: NivelPermissao.ENGENHEIRO, func: 'Testes Técnicos (Hidráulica)', initials: 'JS', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { id: 3, nome: 'Pedro Alves', telefone: '11777777777', endereco: 'Rua C, 789', usuario: 'palves', nivelPermissao: NivelPermissao.OPERADOR, func: 'Etapas Pendentes de Fabricação', initials: 'PA', color: 'bg-gray-100 text-gray-700 border-gray-200' },
  ]);

  return { team };
}
