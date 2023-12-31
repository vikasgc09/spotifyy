import { Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { SongcardComponent } from './components/songcard/songcard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'playlist', component: PlaylistComponent },
    { path: 'search', component: SearchComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'song-card', component: SongcardComponent },
    { path: 'top-nav', component: TopNavComponent },

  ];