import { Component, OnInit } from '@angular/core';
import { DiscosService } from '../../service/discos.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.scss']
})
export class DiscosComponent implements OnInit {
  public isLogin: boolean;


  discos: any [] = [];
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = true;

  constructor(private discosService: DiscosService,
    public authService: AuthService) {

    this.discosService.getDiscos()
    .subscribe (data => {

      setTimeout (() => {
        this.discos = data;
        this.loading = false;
      }, 1000);

    });
   }

   ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
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
