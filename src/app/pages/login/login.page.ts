import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin () {
    this.authService.loginEmail(this.email, this.password)
    .then((res) => {
     this.router.navigate(['/perfil']);
    }).catch ((err) => {
      console.log(err);
    });
  }

}
