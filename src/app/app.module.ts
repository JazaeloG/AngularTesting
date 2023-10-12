import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { MediasService } from './services/medias.service';
import { StddevComponent } from './stddev/stddev.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StddevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MediasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
