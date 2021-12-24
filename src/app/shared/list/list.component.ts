import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private getOldPokemons: any;
  public getAllPokemons: any;

  constructor(
    private service: PokeApiService
  ) { }

  ngOnInit(): void {
    this.service.listAllPokemons.subscribe(
      res => {
        this.getOldPokemons = res.results;
        this.getAllPokemons = this.getOldPokemons;
      }
    );
  }

  public search(val: String){
    //Filtrar a partir da versão "antiga" e quando for filtrando vai voltando ao normal.
    const filter = this.getOldPokemons.filter((res: any) => {
      return !res.name.indexOf(val.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

}
