export class UsuarioModel {
  constructor(
    public id_usuario: string,
    public tipo_documento: string,
    public nombre: string,
    public apellido: string,
    public ciudad: string,
    public email: string,
    public contrasena: string

  ) { }
}

export class reservacionesModel {
  constructor(
    public id_reserva: string,
    public nombre_usuario: string,
    public fecha: string,
    public hora: string,
    public profesional: string
  ) { }
}