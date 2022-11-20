import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {
  @Output() searchCharacterMessageEvent = new EventEmitter<string>;

  searchCharacter(event: any){
    this.searchCharacterMessageEvent.emit(event.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
