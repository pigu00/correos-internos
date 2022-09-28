import { Component, OnInit } from '@angular/core';

import{UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private UsuarioServicio:UsuariosService) { }

  ngOnInit(): void {
    this.UsuarioServicio.consultarUsuario().subscribe(datos=>{console.log(datos)})
  }

}
