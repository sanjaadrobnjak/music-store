import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ArtistsComponent } from './artists/artists.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    {path: "", component:StartComponent}, 
    {path: "artists", component:ArtistsComponent},
    {path: "instruments", component:InstrumentsComponent},
    {path: "info", component: InfoComponent}
];
