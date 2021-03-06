import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResidentialinfoRoutingModule } from "./residentialinfo-routing.module";
import { ResidentialinfoComponent } from "./residentialinfo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";

@NgModule({
  declarations: [ResidentialinfoComponent],
  imports: [
    CommonModule,
    ResidentialinfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class ResidentialinfoModule {}
