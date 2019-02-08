import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
public email: string;
public password: string;
  constructor( public authService: AuthService,
               public router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser () {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
     this.router.navigate(['/perfil']);
    }).catch ((err) => {
      console.log(err);
    });
  }

}
