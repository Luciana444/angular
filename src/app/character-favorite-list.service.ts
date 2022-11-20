import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Character } from './characters-list/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterFavoriteListService {

  private _favoriteList:Character[] = [];
  favoriteList: BehaviorSubject<Character[]> = new BehaviorSubject(this._favoriteList);

  constructor() { }

  addToList(character: Character){
      const favouriteCharactersNames = this._favoriteList.map((character) => character.personaje);
    if(!favouriteCharactersNames.includes(character.personaje)){
      this._favoriteList.push(character);
    }
    this.favoriteList.next(this._favoriteList);
  }

}
