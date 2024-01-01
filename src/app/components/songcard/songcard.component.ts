import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-songcard',
  standalone: true,
  imports: [],
  templateUrl: './songcard.component.html',
  styleUrl: './songcard.component.css'
})
export class SongcardComponent implements OnInit{
  ngOnInit(): void {
   
  }

  @Input() public playlist_thumbnail! : string;
  @Input() public title! : string;
  @Input() public description! : string;

  constructor(){}

}
