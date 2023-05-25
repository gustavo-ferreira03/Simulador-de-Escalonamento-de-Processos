import CPU from "./cpu";
import Processo from "./processo";

class Simulador {
    constructor(
        public cpus: CPU[],
        public filaReal: Fila<Processo>,
        public filasUsuario: Fila<Processo>[],
        public processosPendentes: Processo[]
    ) {}
}