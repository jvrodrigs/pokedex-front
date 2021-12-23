import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public getAllPokemons: any;

  constructor(
    private service: PokeApiService
  ) { }

  ngOnInit(): void {
    this.service.listAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    );
  }

}
