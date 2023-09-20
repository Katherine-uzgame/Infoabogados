import { Component,OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { UsuarioModel } from '../servicio-usuarios/usuario.model';
import { UsuarioService } from '../servicio-usuarios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario=new UsuarioModel("","","","","","","")
  constructor (
    private usuarioService:UsuarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(){

  } 
  onSubmit(){
    this.usuarioService.login(this.usuario).subscribe(data=>{
      alert(data)
      this.router.navigate(['../reservaciones'])
    })
  }

}
