import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeCreatorComponent } from 'src/app/resume-creator/resume-creator.component';

const routes: Routes = [{ path: '', component: ResumeCreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeCreatorRoutingModule {}
