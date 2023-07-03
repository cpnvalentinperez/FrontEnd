import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})

export class NewProyectoComponent implements OnInit  {
  
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private proyectoService: ProyectoService, private router: Router) {}
  
  ngOnInit(): void {    
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombreE, this.descripcionE);
    this.proyectoService.save(expe).subscribe(
      data=>{
        alert("Proyecto Añadido")
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      })

  }
}


