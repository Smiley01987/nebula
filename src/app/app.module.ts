import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'heatmap', component: HeatmapComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
