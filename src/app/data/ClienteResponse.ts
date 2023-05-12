import { Cliente } from "./ClientesDto";

export class ClienteResponse {
    cliente?: Cliente;
    errores?:string[];
    mensaje?: string;

    constructor(init?: Partial<ClienteResponse>) {
        if (init) {
            Object.assign(this, init);
        }
    }

}