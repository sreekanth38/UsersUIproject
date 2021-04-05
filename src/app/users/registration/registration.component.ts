import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    public user: User;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(regiterationForm: NgForm){
    this.user = new User();
    this.user.userName = regiterationForm.value.userName;
    this.user.address = regiterationForm.value.address;
    this.user.mobile = regiterationForm.value.mobile;
    this.user.qualification = regiterationForm.value.qualification;
    this.user.password = regiterationForm.value.password;
    this.userService.addUser(this.user).subscribe(response => console.log(response));
   
  }

}
