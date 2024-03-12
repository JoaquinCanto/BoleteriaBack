export interface EventoData {
	nombre: string;
	banda: string;
	descripcion: string;
	fecha: string;
	hora: string;
	createdAt: Date;
	deletedAt: Date;
}

export interface UsuarioData {
	nombre: string;
	apellido: string;
	fechaNacimiento: Date;
	DNI: string;
	tel: string;
	email: string;
}