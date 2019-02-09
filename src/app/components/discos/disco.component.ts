import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from '../../interfaces/disco.interface';

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
    fechalanzamiento: '',
    key$: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
