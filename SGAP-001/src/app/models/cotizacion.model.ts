import { Auto } from "./auto.model";

export class Cotizacion {
    public constructor(
        public _id?: string,
        public codigo?: string,
        public cliente?: string,
        public producto?: string,
        public tasa?: string,
        public auto?: Auto,
        public timon_cambiado?: boolean,
        public uso?: string,
        public en_tramite?: boolean,
        public is_nuevo?: boolean,
        public suma_aseg?: number,
        public primas?: [string],
        public is_confirmado?: boolean,
        public prima_seleccionada?: string,
        public agencia_reg?: string,
        public usuario_reg?: string,
        public estado?: string
    ) { }
}
