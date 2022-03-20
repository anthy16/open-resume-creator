import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeCreatorComponent } from './resume-creator.component';
import { ResumeCreatorRoutingModule } from 'src/app/resume-creator/resume-creator-routing.module';

@NgModule({
  declarations: [ResumeCreatorComponent],
  imports: [CommonModule, ResumeCreatorRoutingModule]
})
export class ResumeCreatorModule {}
