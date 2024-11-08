import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaClienteComponent } from "./ficha-cliente/ficha-cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FichaClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de Clientes';
  listaClientes = [
    {name: 'Pepe', apellido: 'Lotas', movil: '600555444', email: 'pepelotas@gemeil.com'},
    {name: 'Juan', apellido: 'Wan', movil: '666555444', email: 'wanjuan@gemeil.com'},
    {name: 'Lola', apellido: 'Lolita', movil: '612345789', email: 'lolalolailo@gemeil.com'},
    {name: 'Matilda', apellido: 'Adlima', movil: '678945123', email: 'matatilda@gemeil.com'},
    {name: 'Ron', apellido: 'Cola', movil: '622333111', email: 'cubatalibre@gemeil.com'}
  ]

  mensaje(nombre: string) {
    alert(nombre + " eliminado");
  }
}
