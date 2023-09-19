import { Component,OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { UsuarioModel } from '../servicio-usuarios/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario=new UsuarioModel("","","","","","","")
  constructor (
    private usuarioService:UsuarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(){

  } 
  onSubmit(){
    this.usuarioService.registro(this.usuario).subscribe(data=>{
      alert(data)
      this.router.navigate(['../inicio'])
    })
  }

}
