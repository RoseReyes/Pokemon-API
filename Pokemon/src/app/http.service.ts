import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getPokemon() {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }
}