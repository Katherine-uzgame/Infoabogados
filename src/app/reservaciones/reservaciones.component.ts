import { Component,OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { reservacionesModel } from '../servicio-usuarios/usuario.model';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  usuario=new reservacionesModel("","","","","","")
  constructor (
    private usuarioService:UsuarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(){

  } 
  onSubmit(){
    this.usuarioService.agregarreservaciones(this.usuario).subscribe(data=>{
      alert(data)
      this.router.navigate(['../inicio'])
    })
  }

}
