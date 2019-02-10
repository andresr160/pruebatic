import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public isLogin: boolean;
  public emailUsuario: string;

  constructor(  public authService: AuthService,
    public router: Router ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

}
