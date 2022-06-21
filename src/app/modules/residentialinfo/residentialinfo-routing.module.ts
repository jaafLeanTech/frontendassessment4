import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResidentialinfoComponent } from "./residentialinfo.component";

const routes: Routes = [
  {
    path: "",
    component: ResidentialinfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentialinfoRoutingModule {}
