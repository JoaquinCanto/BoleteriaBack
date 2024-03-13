import { model, Schema } from 'mongoose';
import { ReservaData } from '../types';

const reservaSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	idEvento: {
		type: String,
		required: true,
	},
	zona: {
		type: String,
		required: true,
	},
	cantidadEntradas: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
		required: false,
	},
	deletedAt: {
		type: Date,
		required: false,
	},
});

export default model<ReservaData>('Reserva', reservaSchema);