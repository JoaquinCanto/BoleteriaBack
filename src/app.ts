import express, { Express, Response }from "express";

import eventosRouter from "./routes/eventos";

const app: Express = express();

app.use(express.json());

// Rutas de la app
app.use('/eventos', eventosRouter);

app.get('/', (req, res: Response) => {
	res.status(200).send({
		message: 'Server is up ✅ - Environment: develop',
		data: undefined,
		error: false,
	});
});

export default app;