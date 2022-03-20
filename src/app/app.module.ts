import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumeCreatorModule } from 'src/app/resume-creator/resume-creator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ResumeCreatorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
