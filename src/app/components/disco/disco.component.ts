import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from '../../interfaces/disco.interface';
import { DiscoService } from '../../services/disco.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.scss']
})
export class DiscoComponent implements OnInit {
   disco: Disco = {
    nombre: '',
    autor: '',
    genero: '',
    album: '',
    fecha: ''
  };

  nuevo = false;
  id: string;

  constructor(private discoService: DiscoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

              this.activatedRoute.params
              .subscribe (parametros => {

                this.id = parametros ['id'];
                if (this.id !== 'nuevo') {
                  this.discoService.getDisco(this.id).subscribe (disco => this.disco = disco);
                }
              });
              }

  ngOnInit() {
  }

  guardar() {

    if (this.id === 'nuevo') {
      // insertando
      this.discoService.nuevoDisco (this.disco).subscribe ( data => {
        this.router.navigate(['/disco', data.name]);
      },
      error => console.error(error));
    } else {
      // actualizando
    this.discoService.actualizarDisco (this.disco, this.id).subscribe ( data => {
      console.log(data);
    },
    error => console.error(error));
    }


  }

  agregarNuevo (forma: NgForm) {
      this.router.navigate (['/disco', 'nuevo']);
      forma.reset();
  }

}
