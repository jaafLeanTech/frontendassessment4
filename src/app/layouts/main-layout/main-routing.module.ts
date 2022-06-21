import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "personalinfo",
      },
      {
        path: "personalinfo",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/personalinfo/personalinfo.module").then(
            (m) => m.PersonalinfoModule
          ),
      },
      {
        path: "residentialinfo",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/residentialinfo/residentialinfo.module").then(
            (m) => m.ResidentialinfoModule
          ),
      },
      {
        path: "resume",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/resume/resume.module").then(
            (m) => m.ResumeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
