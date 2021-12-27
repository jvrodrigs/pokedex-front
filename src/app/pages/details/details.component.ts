import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public isError: boolean = false;
  
  constructor(
    private ActivatedRouter: ActivatedRoute,
    private pokeService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id = this.ActivatedRouter.snapshot.params['id'];
    const detail = this.pokeService.getInfosPokemons(`${this.urlPokemon}/${id}`);
    const species = this.pokeService.getInfosPokemons(`${this.urlName}/${id}`);

    //Faz um array de URL's e fazendo multiplos request juntos. (forkJoin)
    forkJoin([detail, species]).subscribe(
      res => {
        this.pokemon = res;
        console.log(this.pokemon);
        
        this.isLoading = true;
      },
      error => {
        this.isError = true;
      }
    );
  }

}
