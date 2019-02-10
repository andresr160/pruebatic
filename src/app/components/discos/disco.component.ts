import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from '../../interface/disco';


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


  constructor() { }

  ngOnInit() {
  }

}
