import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Disco } from '../interface/disco';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  discosURL = 'https://pruebatic-5f58a.firebaseio.com/discos.json';
  discoURL = 'https://pruebatic-5f58a.firebaseio.com/discos/';

  constructor(private http: Http) { }

  nuevoDisco (disco: Disco) {
    const body = JSON.stringify( disco );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.discosURL, body, {headers}).pipe(map(res=>{
      console.log(res.json());
      return res.json();
    }));
  }

  actualizarDisco (disco: Disco, key$: string) {
    const body = JSON.stringify( disco );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.discoURL}/${key$}.json`;

    return this.http.put( url, body, {headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }

  getDisco(key$: string) {
    const url = `${this.discoURL}/${key$}.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
}
