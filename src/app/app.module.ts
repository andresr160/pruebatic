import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import de formulario
import { FormsModule } from '@angular/forms';

// import de firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import componentes
import { DiscosComponent } from './components/discos/discos.component';
import { DiscoComponent } from './components/disco/disco.component';

// import http modulo
import { HttpModule } from '@angular/http';

// import servicio disco
import { DiscoService } from './services/disco.service';

@NgModule({
  declarations: [AppComponent, DiscosComponent, DiscoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AngularFireAuthModule, FormsModule, HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DiscoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
