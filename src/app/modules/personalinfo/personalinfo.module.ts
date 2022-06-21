import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PersonalinfoRoutingModule } from "./personalinfo-routing.module";
import { PersonalinfoComponent } from "./personalinfo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";

@NgModule({
  declarations: [PersonalinfoComponent],
  imports: [
    CommonModule,
    PersonalinfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class PersonalinfoModule {}
