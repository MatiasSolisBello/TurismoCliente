import {Reserva} from './reserva';

export class Depart{
	id_depart: number;
	precio: number;
	estado: string;
    ciudad: string;
    descripcion: string;
    foto: string;
    id_reserva: Reserva;
}