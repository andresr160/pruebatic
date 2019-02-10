import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Disco } from '../interface/disco';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  discosURL = 'https://pruebatic-5f58a.firebaseio.com/discos.json';

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
}
