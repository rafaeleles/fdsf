import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SCanalComponent } from './s-canal/s-canal.component';
import { MensageriaNGComponentComponent } from './MensageriaNGComponent/MensageriaNGComponent.component';
import { KeevoCenterComponentComponent } from './KeevoCenterComponent/KeevoCenterComponent.component';
import { CaduComponentComponent } from './CaduComponent/CaduComponent.component';

@NgModule({
  declarations: [								
    AppComponent,
      SCanalComponent,
      MensageriaNGComponentComponent,
      KeevoCenterComponentComponent,
      CaduComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PanelModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
