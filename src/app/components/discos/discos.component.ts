import { Component, OnInit } from '@angular/core';
import { DiscosService } from '../../service/discos.service';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.scss']
})
export class DiscosComponent implements OnInit {

  discos: any [] = [];
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = true;

  constructor(private discosService: DiscosService) {

    this.discosService.getDiscos()
    .subscribe (data => {

      setTimeout (() => {
        this.discos = data;
        this.loading = false;
      }, 1000);

    });
   }

  ngOnInit() {
  }

  eliminarDisco(key$: string) {
      this.discosService.eliminarDisco(key$)
      .subscribe (respuesta => {
        if (respuesta) {
          console.error(respuesta);
        } else {
          // todo bien
          delete this.discos[key$];
        }
      });
  }

}
