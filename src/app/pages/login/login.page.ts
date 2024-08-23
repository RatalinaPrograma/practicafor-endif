import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  comuna: string = "lo espejo";
  edad: number = 25;
  nombreUsuario: string = "Angela";

  arreglo: any = {
    nombre: 'José',
    apellido: 'Gutierrez',
    edad: 29
  }

  lista: any = [
    {
      id: 1,
      nombre: 'María'
    },
    {
      id: 2,
      nombre: 'Jose'
    },
    {
      id: 3,
      nombre: 'Fatiu'
    }

  ]



  constructor(private router: Router) { }

  ngOnInit() {
  }
  irPagina() {
    //crear variable de contexto
    let navigationextras: NavigationExtras = {
      state: {
        comuna: this.comuna,
        edad:this.edad,
        usuario: this.nombreUsuario
      }
    }

    //crear la logica de programación que requiero
    this.router.navigate(['/agregar'], navigationextras);
  }

}
