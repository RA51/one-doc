import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators ,FormsModule,NgForm,FormGroupDirective } from '@angular/forms';  
import {ErrorStateMatcher} from '@angular/material/core';
import {ProfileService} from './service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  model: any = {};
  profileForm: FormGroup;  
  firstName:string='';  
  lastName:string='';  
  address:string='';  
  dOB:Date=null;  
  sex:string='';  
  blog:string='';  
  email:string='';  
  isAccepted:number=0; 
  constructor(private fb: FormBuilder,private profile:ProfileService) {
        // To initialize FormGroup  
        this.profileForm = fb.group({  
          'firstName' : [null, Validators.required],  
          'lastName' : [null, Validators.required],  
          'address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
          'dOB' : [null, Validators.required],  
          'adharNo':[null,Validators.required],  
          'fatherName':[null, Validators.required],  
          'motherName':[null, Validators.required],  
          'age':[null,Validators.required],
          'maritalStatus': [null,Validators.required],
          'profession':[null,Validators.required],
          'sex':[null,Validators.required],
          'city':[null,Validators.required],
          'state':[null,Validators.required]
        });
      
   }

  ngOnInit() {

  }
 // On Change event of Toggle Button  
 onChange(event:any)  
 {  
   if (event.checked == true) {  
     this.isAccepted = 1;  
   } else {  
     this.isAccepted = 0;  
   }  
 }  
 
 // Executed When Form Is Submitted  
 onFormSubmit(form:NgForm)  
 {  
   console.log(form);
   this.profile.saveProfile(form).subscribe(()=>{

   }, (err) => {
    
  });  
 } 
}
/** Error when invalid control is dirty, touched, or submitted. */
export class ProfileErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
