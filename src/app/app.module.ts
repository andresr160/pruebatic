import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


// import de formulario
import { FormsModule } from '@angular/forms';

// import de firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import de componentes
import { DiscosComponent } from './components/discos/discos.component';
import { DiscoComponent } from './components/discos/disco.component';
import { DiscosService } from './service/discos.service';
import { KeysPipe } from './pipes/keys.pipe';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

// import servicios



@NgModule({
  declarations: [AppComponent, DiscosComponent, DiscoComponent, KeysPipe, InfiniteScrollComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AngularFireAuthModule, FormsModule, HttpModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DiscosService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
