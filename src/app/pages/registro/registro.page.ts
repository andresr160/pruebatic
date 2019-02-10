import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';




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

  onSubmitAddUser (forma: NgForm) {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      alert('Se creo el usuario');
      this.router.navigate(['/perfil']);
    }).catch ((err) => {
      alert(err.message);
    });
  }

}
