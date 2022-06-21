import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-residentialinfo",
  templateUrl: "./residentialinfo.component.html",
  styleUrls: ["./residentialinfo.component.scss"],
})
export class ResidentialinfoComponent implements OnInit {
  formResidentialInfo: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formResidentialInfo = this.formBuilder.group({
      userAddress: ["", Validators.required],
      userNeighborhood: ["", Validators.required],
      userState: ["", Validators.required],
      userCity: ["", Validators.required],
    });
  }

  get getUserAddress() {
    return this.formResidentialInfo.get("userAddress");
  }

  get getUserNeighborhood() {
    return this.formResidentialInfo.get("userNeighborhood");
  }

  get getUserState() {
    return this.formResidentialInfo.get("userState");
  }

  get getUserCity() {
    return this.formResidentialInfo.get("userCity");
  }

  ngOnInit(): void {
    return;
  }
}
