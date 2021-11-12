import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule , Validators, FormGroup, FormControl} from "@angular/forms";
//import { AuthService } from '../services/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminName!: string;
  adminPassword!: string;


  constructor(
    public fb: FormBuilder,
   // private Auth: AuthService
   // public rf: ReactiveFormsModule 
  ) { }


  adminLogin = new FormGroup({
    username: new FormControl ('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })
  get f() {
    return this.adminLogin.controls;
  }
   formatTime(timeStr: any) {
    
}

onReset(){
  this.adminLogin.reset()
}
login(){
 
     const adminName =  document.querySelector<HTMLInputElement>("#username")!.value;
     const adminPassword =  document.querySelector<HTMLInputElement>("#password")!.value;
   
     // alert( adminName + " " +  adminPassword );
     // this.Auth.getUserDetails(adminName, adminPassword)
    }
    

  ngOnInit(): void {
  }

}
