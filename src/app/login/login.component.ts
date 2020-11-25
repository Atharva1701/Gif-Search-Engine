import { Component, OnInit } from '@angular/core';
import { SignupSerService } from '../signup-ser.service';
import { User } from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usernames = ['shreyas', 'shreyask', 'shreyask1'];
  public uname: string = '';
  public passwords = ['password', 'password1', 'password2'];
  userModel = new User('', 'rob@123.com', 'Robb', 'Robrox', false);
  success = false;
  usernameFlag = false;

  constructor(private _signupService: SignupSerService) { }

  ngOnInit() {
    this._signupService.name$
      .subscribe(
        username => {
          this.usernames.push(username);
          this.uname = username;
          console.log("Inside Observable:",this.usernames);
        }
      );

    this._signupService.password$
      .subscribe(
        password => {
          this.passwords.push(password);
          console.log("Inside Observable",this.passwords);
        }
      );
  }

  onSubmit(){
    console.log(this.uname);
    var usernameExists = this.usernames.includes(this.userModel.username);
    if(usernameExists){
      this.usernameFlag = false;
      this.success = true;
    }
    else{
      this.usernameFlag = true;
    }
  }
}
