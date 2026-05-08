export interface EtapaModel {
  nome: string;
  prazo: string;
  status: import('./Enums').StatusEtapa;
}

export interface TesteModel {
  tipo: import('./Enums').TipoTeste;
  resultado: import('./Enums').ResultadoTeste;
}
