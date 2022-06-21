import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./main-layout.component";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";
import { MainRoutingModule } from "./main-routing.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { PersonalinfoModule } from "@app-modules/personalinfo/personalinfo.module";
import { ResumeModule } from "@app-modules/resume/resume.module";
import { ResidentialinfoModule } from "@app-modules/residentialinfo/residentialinfo.module";

@NgModule({
  declarations: [MainLayoutComponent, SidenavComponent, ToolbarComponent],
  imports: [
    AngularMaterialModule,
    RouterModule,
    MainRoutingModule,
    CommonModule,
    PersonalinfoModule,
    ResumeModule,
    ResidentialinfoModule
  ],
  providers: [
  ],
})
export class MainLayoutModule {}
