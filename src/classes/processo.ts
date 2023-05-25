export default class Processo {
    constructor(
      public tempoChegada: number,
      public prioridade: number,
      public tempoCPU: number,
      public tamanho: number,
      public disco: number,
      public inicioIO: number,
      public duracaoIO: number,
      public tempoRestante: number
    ) {}
}