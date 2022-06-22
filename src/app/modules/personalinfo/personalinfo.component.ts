import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { setPersonalInfo } from '@app-core/store/actions/personalinfo.action';
import { AppState } from "@app-core/store/models/app.model";
import { PersonalInfoState } from "@app-core/store/models/personainfo.model";
import { selectPersonalInfo } from "@app-core/store/selectors/personalinfo.selector";
import { PersonalInfoInterface } from '@app-models/interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: "app-personalinfo",
  templateUrl: "./personalinfo.component.html",
  styleUrls: ["./personalinfo.component.scss"],
})
export class PersonalinfoComponent {
  formPersonalInfo: FormGroup;
  personalInfoResource: PersonalInfoInterface;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.formPersonalInfo = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userAge: ["", Validators.required],
      userEmail: ["", Validators.required, Validators.email],
      userTN: ["", Validators.required],
    });

    this.personalInfoResource = {
      firstName: '',
      lastName: '',
      userAge: '',
      userEmail: '',
      userTN: '',
    };

    this.store.select(selectPersonalInfo).subscribe((result: PersonalInfoState)  => {
      this.formPersonalInfo.setValue({
        firstName: result.personalInfoInitial.firstName,
        lastName: result.personalInfoInitial.lastName,
        userAge: result.personalInfoInitial.userAge,
        userEmail: result.personalInfoInitial.userEmail,
        userTN: result.personalInfoInitial.userTN
      });
    })
  }

  get getFirstName() {
    return this.formPersonalInfo.get("firstName");
  }

  get getLastName() {
    return this.formPersonalInfo.get("lastName");
  }

  get getUserAge() {
    return this.formPersonalInfo.get("userAge");
  }

  get getUserEmail() {
    return this.formPersonalInfo.get("userEmail");
  }

  get getUserTN() {
    return this.formPersonalInfo.get("userTN");
  }

  saveFormPersonalInfo(formPersonalInfoValue: FormGroup) {
    this.store.dispatch(setPersonalInfo ({ personalInfo: formPersonalInfoValue.value}))
  }

}
