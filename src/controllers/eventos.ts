import { Request, Response } from 'express';

import EventoModel from '../models/eventos';

const eventosController = {
	// Obtener todos los eventos
	getAll: async (_req: Request, res: Response) => {
		const allEventos = await EventoModel.find({});
		return res.status(200).json({
			status: 200,
			total: allEventos.length,
			data: allEventos,
		});
	},

	//Crear un evento
	create: async (req: Request, res: Response) => {
		try {
			const nuevoEvento = new EventoModel({ ...req.body });
			const evento = await nuevoEvento.save();
			if (evento) {
				return res.status(201).json({
					message: 'Evento creado exitosamente.',
					data: evento,
					error: false,
				});
			}
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({
					message: error.message,
					error: true,
				});
			}
		}
	},

	getById: async (_req: Request, res: Response) => {
		const id = _req.params.id
		const idEvento = await EventoModel.findById(id);
		return res.status(200).json({
			status: 200,
			data: idEvento,
		});
	},

	// delete: async (_req: Request, res: Response) => {
	// 	const deleteEvento = await EventoModel.deleteOne({});
	// 	return res.status(200).json({
	// 		status: 200,
	// 		data: deleteEvento,
	// 	});
	// },

	// update: async (_req: Request, res: Response) => {
	// 	const updateEvento = await EventoModel.updateOne({});
	// 	return res.status(200).json({
	// 		status: 200,
	// 		data: updateEvento,
	// 	});
	// },
};

export default eventosController;