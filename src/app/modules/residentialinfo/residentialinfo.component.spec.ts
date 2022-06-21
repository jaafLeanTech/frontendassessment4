import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ResidentialinfoComponent } from "./residentialinfo.component";

describe("ResidentialinfoComponent", () => {
  let component: ResidentialinfoComponent;
  let fixture: ComponentFixture<ResidentialinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentialinfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
