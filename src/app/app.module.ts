import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoundComponent } from './sound/sound.component';
import { BoardComponent } from './board/board.component';
import { SoundService } from './sound.service';
import { DetectsoundDirective } from './detectsound.directive';

@NgModule({
  declarations: [
    AppComponent,
    SoundComponent,
    BoardComponent,
    DetectsoundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
