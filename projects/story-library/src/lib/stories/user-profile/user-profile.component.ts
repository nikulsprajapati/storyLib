import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from '../resources/countries';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public formGroup !: FormGroup;

  public countries = countries;

  public phoneNumberMask = '(+91) 0000-000-00-00';

  @Output('OutPut') OutPut = new EventEmitter<any>();

  constructor(public fb: FormBuilder) {
    
    this.formGroup = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      country: [''],   
  });
}
  
  ngOnInit(): void {
  }

  cancelChanges(): void {
  
  }

  saveChanges(): void {
    var postData = this.formGroup.value
    this.OutPut.emit({ status: "OnFormSubmit", data: postData });
  }

}
