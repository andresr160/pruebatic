import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from '../../interface/disco';
import { DiscosService } from '../../service/discos.service';




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


  constructor(private discosService: DiscosService) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.disco);
    this.discosService.nuevoDisco(this.disco)
    .subscribe(data => {});
  }

}
