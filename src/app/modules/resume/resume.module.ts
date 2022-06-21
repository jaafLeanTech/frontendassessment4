import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResumeRoutingModule } from "./resume-routing.module";
import { ResumeComponent } from "./resume.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class ResumeModule {}
