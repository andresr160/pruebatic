import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from '../../interface/disco';
import { DiscosService } from '../../service/discos.service';
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
    fechalanzamiento: ''
  };

  nuevo = false;
  id: string;

  constructor(private discosService: DiscosService,
              private router: Router,
              private actiRoute: ActivatedRoute) {

                this.actiRoute.params.subscribe(parametros => {this.id = parametros ['id'];

                });
               }

  ngOnInit() {
  }

  guardar() {
    console.log(this.disco);

    if (this.id === 'nuevo') {
      this.discosService.nuevoDisco(this.disco)
    .subscribe(data => {
      this.router.navigate(['/disco', data.name]);
    }, error => console.error(error));
    } else {
      this.discosService.actualizarDisco(this.disco, this.id)
    .subscribe(data => {
      console.log (data);
    }, error => console.error(error));
    }


  }

}
