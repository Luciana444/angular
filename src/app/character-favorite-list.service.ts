import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Character } from './characters-list/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterFavoriteListService {

  private _favoriteList:Set<Character> = new Set<Character>;
  favoriteList: BehaviorSubject<Set<Character>> = new BehaviorSubject(this._favoriteList);

  constructor() { }

  addToList(character: Character){
    this._favoriteList.add(character);
    this.favoriteList.next(this._favoriteList);
  }

}
