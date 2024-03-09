import  mongoose from 'mongoose';
import config from './config';
import app from './app';

const port = 3000 || 8080;
if (!config.MongoDB_URL){
	console.error("URL is undeined or null.")
}
else{
	mongoose
	.connect(config.MongoDB_URL)
	.then(() => {
		console.log({ level: 'info', message: '✅ Database connected', label: 'mongo' });
		app.listen(port, () => {
			console.log({
				level: 'info',
				message: `Server listening on port ${port}`,
				label: 'server',
			});
		});
		})
	.catch((error) =>
		console.log({
			level: 'error',
			message: '🔴 Database error: ',
			errorData: error,
			label: 'mongo',
		}),
	);
}


