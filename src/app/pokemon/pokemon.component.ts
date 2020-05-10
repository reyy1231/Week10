import { Component, OnInit } from '@angular/core';
import { PokemonService } from"./pokemon.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
pokemons = [];
pokemons$: BehaviorSubject<Array<any>>;
  constructor(private ps: PokemonService) {
    this.pokemons$ = new BehaviorSubject([]);
   }

  ngOnInit(): void {
    this.ps.getPokemons().subscribe((response) =>(
      this.pokemons.push(...Response.results);

      this.pokemons$.next[this.pokemons];
  });
  loadMore(){
  }
  this.idxstart+=20;
    this.ps.getpokemons(this.idxstart).subscribe(response)=>(
      this.pokemons.push(...Response.results);

      this.pokemons$.next[this.pokemons];
      
    )
  
  }
}
