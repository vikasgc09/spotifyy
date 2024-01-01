import { Component } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { SongcardComponent } from '../songcard/songcard.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, SongcardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
