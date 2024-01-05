import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-songcard',
  standalone: true,
  imports: [CommonModule, NgFor,FlexLayoutModule],
  templateUrl: './songcard.component.html',
  styleUrl: './songcard.component.css'
})
export class SongcardComponent implements OnInit{
item :any;
items : number[] = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7, 1,2,3,4,5,6,7, 1,2,3,4,5,6,7];
  ngOnInit(): void {
   
  }

  @Input() public playlist_thumbnail! : string;
  @Input() public title! : string;
  @Input() public description! : string;

  constructor(){}

}
