import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Disco } from '../interfaces/disco.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DiscoService {

discosURL = 'https://pruebatic-5f58a.firebaseio.com/Discos.json';
discoURL = 'https://pruebatic-5f58a.firebaseio.com/Discos/';
  constructor(private http: Http) {}

  nuevoDisco (disco: Disco) {
  const body = JSON.stringify (disco);
  const headers = new Headers ({
    'Content-Type': 'application/json'
  });

  return this.http.post(this.discosURL, body, {headers} )
        .pipe(map (res => {
          console.log(res.json());
          return res.json();
        }));
  }
  actualizarDisco (disco: Disco, key$: string) {
    const body = JSON.stringify (disco);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });

    const url = `${ this.discoURL } /${key$}.json`;

    return this.http.put( url, body, {headers} )
          .pipe(map (res => {
            console.log(res.json());
            return res.json();
          }));
    }

    getDisco (key$: string) {
      const url = `${ this.discoURL } /${key$}.json`;
      return this.http.get( url)
          .pipe(map (res => res.json() ));

    }
}
