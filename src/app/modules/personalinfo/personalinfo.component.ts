import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { setPersonalInfo } from '@app-core/store/actions/personalinfo.action';
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
  personalInfoSource: PersonalInfoInterface;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.formPersonalInfo = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userAge: ["", Validators.required],
      userEmail: ["", Validators.required],
      userTN: ["", Validators.required],
    });

    this.personalInfoSource = {
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

  // public canGoNextView(): boolean {
  //   if (
  //     this.getFirstName.value != "" && this.getLastName.value != ""
  //     && this.getUserAge.value != '' && this.getUserEmail.value != ''
  //     && this.getUserTN.value != ''
  //   ) {
  //     return true;
  //   } else {
  //     alert('Please, enter all the information requeried');
  //     return false;
  //   }
  //}
}
