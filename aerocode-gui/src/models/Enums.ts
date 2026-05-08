export type TipoAeronave = 'COMERCIAL' | 'MILITAR';

export const TipoAeronave = {
  COMERCIAL: 'COMERCIAL' as TipoAeronave,
  MILITAR: 'MILITAR' as TipoAeronave
};

export type TipoPeca = 'NACIONAL' | 'IMPORTADA';

export const TipoPeca = {
  NACIONAL: 'NACIONAL' as TipoPeca,
  IMPORTADA: 'IMPORTADA' as TipoPeca
};

export type StatusPeca = 'EM_PRODUCAO' | 'EM_TRANSPORTE' | 'PRONTA';

export const StatusPeca = {
  EM_PRODUCAO: 'EM_PRODUCAO' as StatusPeca,
  EM_TRANSPORTE: 'EM_TRANSPORTE' as StatusPeca,
  PRONTA: 'PRONTA' as StatusPeca
};

export type StatusEtapa = 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDA';

export const StatusEtapa = {
  PENDENTE: 'PENDENTE' as StatusEtapa,
  ANDAMENTO: 'ANDAMENTO' as StatusEtapa,
  CONCLUIDA: 'CONCLUIDA' as StatusEtapa
};

export type NivelPermissao = 'ADMINISTRADOR' | 'ENGENHEIRO' | 'OPERADOR';

export const NivelPermissao = {
  ADMINISTRADOR: 'ADMINISTRADOR' as NivelPermissao,
  ENGENHEIRO: 'ENGENHEIRO' as NivelPermissao,
  OPERADOR: 'OPERADOR' as NivelPermissao
};

export type TipoTeste = 'ELETRICO' | 'HIDRAULICO' | 'AERODINAMICO';

export const TipoTeste = {
  ELETRICO: 'ELETRICO' as TipoTeste,
  HIDRAULICO: 'HIDRAULICO' as TipoTeste,
  AERODINAMICO: 'AERODINAMICO' as TipoTeste
};

export type ResultadoTeste = 'APROVADO' | 'REPROVADO';

export const ResultadoTeste = {
  APROVADO: 'APROVADO' as ResultadoTeste,
  REPROVADO: 'REPROVADO' as ResultadoTeste
};
