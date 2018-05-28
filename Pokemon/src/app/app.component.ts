import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  abilities: string;
  ability_two: string;
  image: string;

  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
    this.showpokemon();
    
  }

  showpokemon(){
    let observable = this._httpService.getPokemon()
    observable.subscribe(data =>{
      console.log('get pokemon', data);
      this.name = data['name'];
      this.abilities = data['abilities'][0]['ability'].name;
      this.ability_two = data['abilities'][1]['ability'].name;
    })
  }

}

