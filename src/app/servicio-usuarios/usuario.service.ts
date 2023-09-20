import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel,reservacionesModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL ="http://localhost:9300"

  constructor(private http: HttpClient) { }

  agregarreservaciones(reservaciones:reservacionesModel){
    return this.http.post<string>(`${this.BASE_URL}/reservaciones`,reservaciones);
  }
  obtenerreservaciones() {
    return this.http.get<reservacionesModel[]>(this.BASE_URL+'/reservaciones');
  }
  obtenerreservacion(Id_reservaciones: string) {
    return this.http.get<reservacionesModel[]>(`${this.BASE_URL}/reservaciones/${Id_reservaciones}`)
  }
  actualizarreservacion(reservacion: reservacionesModel) {
    return this.http.put<string>(`${this.BASE_URL}/reservaciones_editar/${reservacion.id_reserva}`, reservacion)
  }
  registro(usuario:UsuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/login`,usuario);
  }

  login(login:UsuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/login_validar`,login);
  }
  borrarUsuario(id_usuario: string) {
    return this.http.delete<string>(`${this.BASE_URL}/login_eliminar/${id_usuario}`)
  }



}